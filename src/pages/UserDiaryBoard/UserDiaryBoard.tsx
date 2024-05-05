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
} from './UserDiaryBoard.style';
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
import { useParams } from 'react-router-dom';
import { useSetModalType } from '../../hook/useSetModalType';
import { CommonModal } from '../../components/Modal/CommonModal';

interface BoardItemType {
  coverType: string;
  diaryName: string;
  diaryBookId: string;
  group: string;
  owner: string;
}

export const UserDiaryBoard = () => {
  const { id } = useParams();
  const [boardData, setBoardData] = useState<BoardItemType[]>([]);
  type CoverType = DiaryBookType['coverType'];
  const [pageNumber, setPageNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDiaryName, setSelectedDiaryName] = useState('');
  const [selectedDiaryBookId, setSelectedDiaryBookId] = useState('0');
  const setModalType = useSetModalType();
  const itemsPerPage = 6;

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

  useEffect(() => {
    const fetchUserData = async (id: string | undefined) => {
      try {
        const userData = await getMemberBoard(id);
        setBoardData(userData);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };
    fetchUserData(id);
  }, []);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleSelectModal = (diaryName: string, diaryBookId: string) => {
    setOpenModal(true);
    setModalType('WRITEORVIEW');
    setSelectedDiaryName(diaryName);
    setSelectedDiaryBookId(diaryBookId);
  };

  return (
    <StyledContainer>
      <Header isDrawing={false} />
      <StyledBoardContainer>
        <StyledGreenBoard src={GreenBoard} />
        <StyledTodayDiaryGrid>
          {getPageItems().map((item) => (
            <StyledUserDiary onClick={() => handleSelectModal(item.diaryName, item.diaryBookId)}>
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
      {openModal && <CommonModal diaryName={selectedDiaryName} diarybookId={selectedDiaryBookId} />}
    </StyledContainer>
  );
};
