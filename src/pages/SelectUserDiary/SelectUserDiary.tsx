// import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import {
  StyledBoardContainer,
  StyledContainer,
  StyledEmptySketchBook,
  StyledGreenBoard,
  StyledLeftArrow,
  StyledRightArrow,
  StyledSketchBookName,
  StyledSketchBookSchool,
  StyledSketchBookTitle,
  StyledTodayDiaryGrid,
  StyledUserDiary,
} from './SelectUserDiary.style';
import GreenBoard from '../../assets/MyGreenBoard.svg';
import { useEffect, useState } from 'react';
import { getMemberBoard } from '../../apis/getMemberBoard';

import PINK from '../../assets/Cover/PINK.svg';
import YELLOW from '../../assets/Cover/ORANGE.svg';
import GREEN from '../../assets/Cover/GREEN.svg';
import BLUE from '../../assets/Cover/BLUE.svg';
import PURPLE from '../../assets/Cover/PURPLE.svg';
import Arrow from '../../assets/Arrow.png';
import { DiaryBookType } from '../../types/DiaryBook.type';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSetModalType } from '../../hook/useSetModalType';
import { CommonModal } from '../../components/Modal/CommonModal';

interface BoardItemType {
  coverType: string;
  diaryName: string;
  diaryBookId: number;
  group: string;
  owner: string;
}

export const SelectUserDiaryBoard = () => {
  const { id } = useParams();
  const [boardData, setBoardData] = useState<BoardItemType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const setModalType = useSetModalType();
  type CoverType = DiaryBookType['coverType'];
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const getPageItems = () => {
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return boardData.slice(startIndex, endIndex);
  };

  const coverImages: Record<CoverType, string> = {
    PINK: PINK,
    YELLOW: YELLOW,
    GREEN: GREEN,
    BLUE: BLUE,
    PURPLE: PURPLE,
  };

  let location = useLocation();

  useEffect(() => {
    setModalOpen(true);
    setModalType('SELECTDIARY');
    const fetchUserData = async (id: string | undefined) => {
      try {
        const userData = await getMemberBoard(id);
        setBoardData(userData);
        console.log(boardData);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };
    fetchUserData(id);
  }, [location]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <StyledContainer>
      <Header isDrawing={false} />
      <StyledBoardContainer>
        <StyledGreenBoard src={GreenBoard} />
        <StyledTodayDiaryGrid>
          {getPageItems().map((item) => (
            <StyledUserDiary
              onClick={() => {
                navigate(`/drawing/${item.diaryBookId}`);
              }}
            >
              <StyledEmptySketchBook src={coverImages[item.coverType]} key={item.diaryBookId} />
              <StyledSketchBookTitle>{item.diaryName}</StyledSketchBookTitle>
              <StyledSketchBookSchool>{item.group}</StyledSketchBookSchool>
              <StyledSketchBookName>{item.owner}</StyledSketchBookName>
            </StyledUserDiary>
          ))}
        </StyledTodayDiaryGrid>
        <StyledLeftArrow src={Arrow} onClick={prevPage} isDisabled={pageNumber === 0} />
        <StyledRightArrow
          src={Arrow}
          onClick={nextPage}
          isDisabled={pageNumber === Math.ceil(boardData.length / itemsPerPage) - 1}
        />
      </StyledBoardContainer>
      {modalOpen && <CommonModal onCloseModal={() => setModalOpen(false)} />}
    </StyledContainer>
  );
};
