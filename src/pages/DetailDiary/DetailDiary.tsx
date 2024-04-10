import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import {
  StyledBookMarked,
  StyledBookMarkedContainer,
  StyledContainer,
  StyledDrawingBook,
  StyledDrawingContainer,
} from './DetailDiary.style';
import DrawingBook from '../../assets/DrawingEmptySketchBook.png';
import PutBookMark from '../../assets/bookmarks/PutBookMark.svg';
import ShareBookMark from '../../assets/bookmarks/ShareBookMark.svg';
import SaveBookMark from '../../assets/bookmarks/SaveBookMark.svg';
import { CommonModal } from '../../components/Modal/CommonModal';
import { useSetModalType } from '../../hook/useSetModalType';

export const DetailDiary = () => {
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const setModalType = useSetModalType();

  useEffect(() => {
    setIsOpenShareModal(false);
    setModalType('SHARE');
  }, []);

  const handleShareOpenModal = () => {
    setIsOpenShareModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenShareModal(false);
  };

  return (
    <StyledContainer>
      <Header isDrawing />
      <StyledDrawingContainer>
        <StyledDrawingBook src={DrawingBook} />
        <StyledBookMarkedContainer>
          <StyledBookMarked src={PutBookMark} />
          <StyledBookMarked src={ShareBookMark} onClick={handleShareOpenModal} />
          <StyledBookMarked src={SaveBookMark} />
        </StyledBookMarkedContainer>
      </StyledDrawingContainer>
      {isOpenShareModal && <CommonModal onCloseModal={() => handleCloseModal()} />}
    </StyledContainer>
  );
};
