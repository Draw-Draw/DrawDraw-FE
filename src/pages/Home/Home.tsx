import {
  StyledBoardContainer,
  StyledContainer,
  StyledEmptySketchBook,
  StyledGreenBoard,
  StyledTodayDiaryGrid,
} from './Home.style';
import { Header } from '../../components/Header/Header';
import GreenBoard from '../../assets/GreenBoard.svg';
import EmptySektchBook from '../../assets/EmptyDrawSketchBook.svg';

export const Home = () => {
  return (
    <StyledContainer>
      <Header isDrawing={false} />
      <StyledBoardContainer>
        <StyledGreenBoard src={GreenBoard} />
        <StyledTodayDiaryGrid>
          {Array.from({ length: 4 }).map((_, index) => (
            <StyledEmptySketchBook src={EmptySektchBook} key={index} />
          ))}
        </StyledTodayDiaryGrid>
      </StyledBoardContainer>
    </StyledContainer>
  );
};
