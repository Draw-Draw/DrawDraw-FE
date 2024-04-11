// import { useParams } from 'react-router-dom';
import { useState } from 'react';
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

const Btn = styled.button`
  z-index: 9999;
`;

export const TotalDiary = () => {
  const { diarybookid, diaryid } = useParams<{
    diarybookid: string | undefined;
    diaryid: string | undefined;
  }>();
  const [isValue, setIsValue] = useState<number>(3);
  const [isMy] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const maxValue = 10;

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
        {!isComment ? (
          <>
            {/* {isMy ? <MyDetailDiary /> : <NotMineDetailDiary onSelectMode={handleChangeMode} />} */}
            <StyledRangeContainer>
              <StyledPageSlide
                type="range"
                min="1"
                max={maxValue.toString()}
                defaultValue={isValue.toString()}
                onChange={handleChange}
              />
              <StyledRangeText>
                {isValue}/{maxValue}
              </StyledRangeText>
            </StyledRangeContainer>
          </>
        ) : (
          <Comment onSelectMode={handleChangeMode} diarybookid={diarybookid} diaryid={diaryid} />
        )}
      </StyledDiaryContainer>
    </StyledContainer>
  );
};
