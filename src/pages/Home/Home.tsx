import {
  StyledBoardContainer,
  StyledContainer,
  StyledEmptySketchBook,
  StyledGreenBoard,
  StyledImage,
  StyledSketchBookContainer,
  StyledTodayDiaryGrid,
} from './Home.style';
import { Header } from '../../components/Header/Header';
import GreenBoard from '../../assets/GreenBoard.svg';
import EmptySketchBook from '../../assets/EmptyDrawSketchBook.svg';
import { useEffect, useState } from 'react';
import { getBoard } from '../../apis/getBoard';
import { useNavigate } from 'react-router-dom';

interface BoardItemType {
  imageUrl: string;
  diaryId: number;
  diaryBookId: number;
  name: string;
}

export const Home = () => {
  const [boardData, setBoardData] = useState<BoardItemType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBoard();
        setBoardData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };

    fetchData();
  }, []);

  const onGoDiary = (diaryBookId: number, diaryId: number) => {
    navigate(`/diary/${diaryBookId}/${diaryId}`);
  };

  return (
    <StyledContainer>
      <Header isDrawing={false} />
      <StyledBoardContainer>
        <StyledGreenBoard src={GreenBoard} />
        <StyledTodayDiaryGrid>
          {boardData.map((item) => (
            <StyledSketchBookContainer onClick={() => onGoDiary(item.diaryBookId, item.diaryId)}>
              <StyledEmptySketchBook src={EmptySketchBook} />
              <StyledImage src={item.imageUrl} key={item.diaryId} />
            </StyledSketchBookContainer>
          ))}
        </StyledTodayDiaryGrid>
      </StyledBoardContainer>
    </StyledContainer>
  );
};
