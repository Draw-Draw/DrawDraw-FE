import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  StyledBtn,
  StyledContainer,
  StyledDiaryContainer,
  StyledIcons,
  StyledNoneContaier,
  StyledPageSlide,
  StyledRangeContainer,
  StyledRangeText,
  StyledText,
} from './TotalDiary.style';
import { Header } from '../../components/Header/Header';
import { MyDetailDiary } from '../../components/MyDetailDiary/MyDetailDiary';
import { NotMineDetailDiary } from '../../components/NotMineDetailDiary/NotMineDetailDiary';
import { Comment } from '../../components/Comment/Comment';
import { useParams } from 'react-router-dom';
import { getTotalDiary } from '../../apis/getTotalDiary';
import { ResultDiaryType } from '@/types/ResultDiary.type';
import Rainy from '../../assets/weathers/Rainy.png';
import { useNavigate } from 'react-router-dom';

const Btn = styled.button`
  z-index: 9999;
`;

export const TotalDiary = () => {
  const { diarybookid } = useParams<{
    diarybookid: string | undefined;
    diaryid: string | undefined;
  }>();
  const [isValue, setIsValue] = useState<number>(1);
  const [isMy] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const [isDiaryArr, setIsDiaryArr] = useState([]);
  const [isDiaryData, setIsDiaryData] = useState<ResultDiaryType>({});
  const navigate = useNavigate();

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

  const handleGoDrawing = () => {
    navigate(`/drawing/${diarybookid}`);
  };

  return (
    <StyledContainer>
      <Header isDrawing={false} isTotal />
      <StyledDiaryContainer>
        {isDiaryArr.length > 0 ? (
          <>
            {!isComment ? (
              <>
                {isMy && isDiaryData ? (
                  <MyDetailDiary
                    diarybookId={diarybookid}
                    isData={isDiaryData}
                    onSelectMode={handleChangeMode}
                  />
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
        ) : (
          <StyledNoneContaier>
            <StyledIcons src={Rainy} />
            <StyledText>이 일기장에 작성된 일기가 없어요</StyledText>
            <StyledBtn onClick={handleGoDrawing}>일기 쓰러 가기</StyledBtn>
          </StyledNoneContaier>
        )}
      </StyledDiaryContainer>
    </StyledContainer>
  );
};
