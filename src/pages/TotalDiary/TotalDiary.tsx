// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  StyledContainer,
  StyledDiaryContainer,
  // StyledDrawingBook,
  StyledPageSlide,
  StyledRangeContainer,
  StyledRangeText,
} from './TotalDiary.style';
import { Header } from '../../components/Header/Header';
// import EmptySketchBook from '../../assets/EmptySketchBook.png';
import { MyDetailDiary } from '../../components/MyDetailDiary/MyDetailDiary';
import { NotMineDetailDiary } from '../../components/NotMineDetailDiary/NotMineDetailDiary';
import { Comment } from '../../components/Comment/Comment';
import { useParams } from 'react-router-dom';
import { getTotalDiary } from '../../apis/getTotalDiary';
import { ResultDiaryType } from '@/types/ResultDiary.type';

const Btn = styled.button`
  z-index: 9999;
`;

export const TotalDiary = () => {
  const { diarybookid, diaryid } = useParams<{
    diarybookid: string | undefined;
    diaryid: string | undefined;
  }>();
  const [isValue, setIsValue] = useState<number>(1);
  const [isMy] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const [isDiaryArr, setIsDiaryArr] = useState([]);
  const [isDiaryData, setIsDiaryData] = useState<ResultDiaryType>({});

  useEffect(() => {
    const fetchDiaryData = async () => {
      try {
        const diaryData = await getTotalDiary(diarybookid);
        setIsDiaryArr(diaryData);
        console.log(diaryData);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };
    fetchDiaryData();
  }, [diarybookid]);

  useEffect(() => {
    if (isDiaryArr.length > 0) {
      const data = isDiaryArr[isValue - 1];
      setIsDiaryData(data);
    }
  }, [isValue, isDiaryArr]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setIsValue(newValue);
  };

  const handleChangeMode = () => {
    setIsComment((prev) => !prev);
    console.log(isComment);
  };

  return (
    <StyledContainer>
      <Header isDrawing={false} isTotal />
      <StyledDiaryContainer>
        {isDiaryArr.length > 0 && (
          <>
            {!isComment ? (
              <>
                {isMy && isDiaryData ? (
                  <MyDetailDiary isData={isDiaryData} onSelectMode={handleChangeMode} />
                ) : (
                  <NotMineDetailDiary isData={isDiaryData} onSelectMode={handleChangeMode} />
                )}
                <StyledRangeContainer>
                  <StyledPageSlide
                    type="range"
                    min="1"
                    max={isDiaryArr.length}
                    defaultValue={isValue.toString()}
                    onChange={handleChange}
                  />
                  <StyledRangeText>
                    {isValue}/{isDiaryArr.length}
                  </StyledRangeText>
                </StyledRangeContainer>
              </>
            ) : (
              <Comment
                onSelectMode={handleChangeMode}
                diarybookid={diarybookid}
                diaryid={isDiaryData.diaryId}
              />
            )}
          </>
        )}
      </StyledDiaryContainer>
    </StyledContainer>
  );
};
