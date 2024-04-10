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
import { useEffect, useState } from 'react';
import { getBoard } from '../../apis/getBoard';

export const Home = () => {
  const [boardData, setBoardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBoard();
        setBoardData(data);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };

    fetchData();
  }, []);

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
