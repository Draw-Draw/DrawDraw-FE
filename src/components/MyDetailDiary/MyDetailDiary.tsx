import { useEffect, useState } from 'react';
import { CommonModal } from '../Modal/CommonModal';
import {
  StyledBookMarked,
  StyledBookMarkedContainer,
  StyledContainer,
  StyledDrawingBook,
  StyledDrawingContainer,
} from './MyDetailDiary.style';
import DrawingBook from '../../assets/DrawingEmptySketchBook.png';
import PutBookMark from '../../assets/bookmarks/PutBookMark.svg';
import ShareBookMark from '../../assets/bookmarks/ShareBookMark.svg';
import SaveBookMark from '../../assets/bookmarks/SaveBookMark.svg';
import { useSetModalType } from '../../hook/useSetModalType';

export const MyDetailDiary = () => {
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
