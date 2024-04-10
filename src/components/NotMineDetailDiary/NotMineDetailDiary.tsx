import {
  StyledBookMarked,
  StyledBookMarkedContainer,
  StyledContainer,
  StyledDrawingBook,
  StyledDrawingContainer,
} from './NotMineDetailDiary.style';
import DrawingBook from '../../assets/DrawingEmptySketchBook.png';
import CommentBookMark from '../../assets/bookmarks/CommentBookMark.svg';

interface NotMineDetailDiaryProps {
  onSelectMode: () => void;
}

export const NotMineDetailDiary = ({ onSelectMode }: NotMineDetailDiaryProps) => {
  return (
    <StyledContainer>
      <StyledDrawingContainer>
        <StyledDrawingBook src={DrawingBook} />
        <StyledBookMarkedContainer>
          <StyledBookMarked src={CommentBookMark} onClick={onSelectMode} />
        </StyledBookMarkedContainer>
      </StyledDrawingContainer>
    </StyledContainer>
  );
};
