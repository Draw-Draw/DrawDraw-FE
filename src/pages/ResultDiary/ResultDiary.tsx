import { useEffect, useState } from 'react';
import { StyledContainer, StyledDiaryContainer } from './ResultDiary.style';
import { Header } from '../../components/Header/Header';
import { MyDetailDiary } from '../../components/MyDetailDiary/MyDetailDiary';
import { NotMineDetailDiary } from '../../components/NotMineDetailDiary/NotMineDetailDiary';
import { Comment } from '../../components/Comment/Comment';
import { useParams } from 'react-router-dom';
import { getDiary } from '../../apis/getDiary';
import { ResultDiaryType } from '../../types/ResultDiary.type';

export const ResultDiary = () => {
  const { diarybookid, diaryid } = useParams<{
    diarybookid: string | undefined;
    diaryid: string | undefined;
  }>();

  const [isComment, setIsComment] = useState(false);
  const [diaryData, setDiaryData] = useState<ResultDiaryType>({});

  useEffect(() => {
    if (diarybookid && diaryid) {
      const fetchDiary = async () => {
        try {
          const data = await getDiary(diarybookid, diaryid);
          setDiaryData(data);
        } catch (error) {
          console.error('Error fetching diary:', error);
        }
      };
      fetchDiary();
    }
  }, [diarybookid, diaryid]);

  const handleChangeMode = () => {
    setIsComment((prev) => !prev);
    console.log(isComment);
  };

  return (
    <StyledContainer>
      {/* 남의 일기일 때랑 헤더 분기 */}
      <Header isDrawing={false} isTotal />
      <StyledDiaryContainer>
        {!isComment ? (
          <>
            {diaryData?.isMine && diaryData ? (
              <MyDetailDiary
                diarybookId={diarybookid}
                diaryId={diaryid}
                isData={diaryData}
                onSelectMode={handleChangeMode}
              />
            ) : (
              <NotMineDetailDiary isData={diaryData} onSelectMode={handleChangeMode} />
            )}
          </>
        ) : (
          <Comment onSelectMode={handleChangeMode} diarybookid={diarybookid} diaryid={diaryid} />
        )}
      </StyledDiaryContainer>
    </StyledContainer>
  );
};
