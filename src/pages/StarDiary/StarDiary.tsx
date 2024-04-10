// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import {
  StyledContainer,
  StyledDiaryContainer,
  StyledPageSlide,
  StyledRangeContainer,
  StyledRangeText,
} from './StarDiary.style';
import { Header } from '../../components/Header/Header';
// import EmptySketchBook from '../../assets/EmptySketchBook.png';
import { MyDetailDiary } from '../../components/MyDetailDiary/MyDetailDiary';
import { NotMineDetailDiary } from '../../components/NotMineDetailDiary/NotMineDetailDiary';
import { Comment } from '../../components/Comment/Comment';

const Btn = styled.button`
  z-index: 9999;
`;

export const StarDiary = () => {
  // const { id, diaryid } = useParams();
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
            <NotMineDetailDiary onSelectMode={handleChangeMode} />
          </>
        ) : (
          <Comment onSelectMode={handleChangeMode} />
        )}
      </StyledDiaryContainer>
    </StyledContainer>
  );
};
