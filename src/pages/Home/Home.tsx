import {
  StyledBoardContainer,
  StyledContainer,
  StyledEmptySketchBook,
  StyledGreenBoard,
  StyledTodayDiaryGrid,
} from './Home.style';
import { Header } from '../../components/Header/Header';
import GreenBoard from '../../assets/GreenBoard.svg';
import EmptySektchBook from '../../assets/EmptySketchBook.svg';

export const Home = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledBoardContainer>
        <StyledGreenBoard src={GreenBoard} />
        <StyledTodayDiaryGrid>
          {Array.from({ length: 6 }).map((_, index) => (
            <StyledEmptySketchBook src={EmptySektchBook} key={index} />
          ))}
        </StyledTodayDiaryGrid>
      </StyledBoardContainer>
    </StyledContainer>
  );
};
