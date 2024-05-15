import {
  StyledBoardContainer,
  StyledContainer,
  StyledEmptySketchBook,
  StyledGreenBoard,
  StyledImage,
  StyledSketchBookContainer,
  StyledTodayDiaryGrid,
} from './Exhibition.style';
import { Header } from '../../components/Header/Header';
import GreenBoard from '../../assets/GreenBoard.svg';
import EmptySketchBook from '../../assets/EmptyDrawSketchBook.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getExhibition } from '../../apis/getExhibition';

interface BoardItemType {
  imageUrl: string;
  diaryId: number;
  diaryBookId: number;
  name: string;
}

export const Exhibition = () => {
  const [boardData, setBoardData] = useState<BoardItemType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExhibition();
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
          {boardData &&
            boardData.map((item) => (
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
