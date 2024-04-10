// import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import {
  StyledBoardContainer,
  StyledContainer,
  StyledEmptySketchBook,
  StyledGreenBoard,
  StyledTodayDiaryGrid,
} from './UserDiaryBoard.style';
import EmptySketchBook from '../../assets/EmptySketchBook.png';
import GreenBoard from '../../assets/MyGreenBoard.svg';

export const UserDiaryBoard = () => {
  // const { id } = useParams();
  return (
    <StyledContainer>
      <Header isDrawing={false} />
      <StyledBoardContainer>
        <StyledGreenBoard src={GreenBoard} />
        <StyledTodayDiaryGrid>
          {Array.from({ length: 6 }).map((_, index) => (
            <StyledEmptySketchBook src={EmptySketchBook} key={index} />
          ))}
        </StyledTodayDiaryGrid>
      </StyledBoardContainer>
    </StyledContainer>
  );
};
