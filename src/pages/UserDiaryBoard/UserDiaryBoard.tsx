// import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import {
  StyledBoardContainer,
  StyledContainer,
  StyledEmptySketchBook,
  StyledGreenBoard,
  StyledSketchBookName,
  StyledSketchBookSchool,
  StyledSketchBookTitle,
  StyledTodayDiaryGrid,
  StyledUserDiary,
} from './UserDiaryBoard.style';
import EmptySketchBook from '../../assets/EmptySketchBook.png';
import GreenBoard from '../../assets/MyGreenBoard.svg';
import { useEffect, useState } from 'react';
import { getMemberBoard } from '../../apis/getMemberBoard';

import PINK from '../../assets/Cover/PINK.svg';
import YELLOW from '../../assets/Cover/ORANGE.svg';
import GREEN from '../../assets/Cover/GREEN.svg';
import BLUE from '../../assets/Cover/BLUE.svg';
import PURPLE from '../../assets/Cover/PURPLE.svg';
import { DiaryBookType } from '../../types/DiaryBook.type';

interface BoardItemType {
  coverType: string;
  diaryName: string;
  diaryBookId: number;
  group: string;
  owner: string;
}

export const UserDiaryBoard = () => {
  // const { id } = useParams();
  const [boardData, setBoardData] = useState<BoardItemType[]>([]);
  type CoverType = DiaryBookType['coverType'];

  const coverImages: Record<CoverType, string> = {
    PINK: PINK,
    YELLOW: YELLOW,
    GREEN: GREEN,
    BLUE: BLUE,
    PURPLE: PURPLE,
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getMemberBoard();
        setBoardData(userData);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <StyledContainer>
      <Header isDrawing={false} />
      <StyledBoardContainer>
        <StyledGreenBoard src={GreenBoard} />
        <StyledTodayDiaryGrid>
          {boardData.map((item) => (
            <StyledUserDiary>
              <StyledEmptySketchBook src={coverImages[item.coverType]} key={item.diaryBookId} />
              <StyledSketchBookTitle>{item.diaryName}</StyledSketchBookTitle>
              <StyledSketchBookSchool>{item.group}</StyledSketchBookSchool>
              <StyledSketchBookName>{item.owner}</StyledSketchBookName>
            </StyledUserDiary>
          ))}
        </StyledTodayDiaryGrid>
      </StyledBoardContainer>
    </StyledContainer>
  );
};
