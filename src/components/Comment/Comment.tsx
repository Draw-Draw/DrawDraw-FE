import { useEffect, useState } from 'react';
import CommentSketchBook from '../../assets/CommentSketchBook.svg';
import {
  StyledBookMarked,
  StyledBookMarkedContainer,
  StyledComment,
  StyledCommentBook,
  StyledCommentContainer,
  StyledCommentText,
  StyledLeftArrow,
  StyledNickname,
  StyledPlusBtn,
  StyledRightArrow,
  StyledStamp,
  StyledText,
} from './Comment.style';
import BLUE from '../../assets/Stamps/BlueStamp.svg';
import PURPLE from '../../assets/Stamps/PurpleStamp.svg';
import RED from '../../assets/Stamps/RedStamp.svg';
import GREEN from '../../assets/Stamps/GreenStamp.svg';
import YELLOW from '../../assets/Stamps/YellowStamp.svg';
import ORANGE from '../../assets/Stamps/OrangeStamp.svg';
import PlusBtn from '../../assets/buttons/PlusBtn.svg';
import { CommonModal } from '../Modal/CommonModal';
import { useSetModalType } from '../../hook/useSetModalType';
import GoDiaryBookMark from '../../assets/bookmarks/GoDiaryBookMark.svg';
import { getComment } from '../..//apis/getComment';
import { ResponseCommentType } from '../../types/Comment.type';
import { modalTypeState } from '../../recoil/modalType';
import { useRecoilValue } from 'recoil';
import Arrow from '../../assets/Arrow.png';

interface CommentProps {
  onSelectMode: () => void;
  diarybookid: string | undefined;
  diaryid: string | undefined;
}

export const Comment = ({ onSelectMode, diarybookid, diaryid }: CommentProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const setModalType = useSetModalType();
  const [isComments, setIsComments] = useState<ResponseCommentType[]>([]);
  const modalType = useRecoilValue(modalTypeState);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  const stampImages: Record<string, string> = {
    BLUE: BLUE,
    YELLOW: YELLOW,
    GREEN: GREEN,
    RED: RED,
    PURPLE: PURPLE,
    ORANGE: ORANGE,
  };

  const fetchComment = async () => {
    try {
      const response = await getComment(diaryid);
      setIsComments(response);
      console.log(response);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    setModalType('STAMP');
    fetchComment();
  }, []);

  const handleOpenModal = () => {
    setIsOpenModal(true);
    setModalType('STAMP');
  };

  const handleCloseModal = () => {
    if (modalType === 'COMMENT') {
      setIsOpenModal(false);
    }
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const getPageItems = () => {
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return isComments.slice(startIndex, endIndex);
  };

  return (
    <>
      <StyledCommentBook src={CommentSketchBook} />
      <StyledCommentContainer>
        {isComments &&
          getPageItems().map((item, index) => (
            <StyledComment key={index}>
              <StyledStamp src={stampImages[item.stampType]} />
              <StyledCommentText>
                <StyledNickname>{item.name}</StyledNickname>
                <StyledText>{item.content}</StyledText>
              </StyledCommentText>
            </StyledComment>
          ))}
        <StyledPlusBtn src={PlusBtn} onClick={handleOpenModal} />
      </StyledCommentContainer>
      <StyledBookMarkedContainer>
        <StyledBookMarked src={GoDiaryBookMark} onClick={onSelectMode} />
      </StyledBookMarkedContainer>
      <StyledLeftArrow src={Arrow} onClick={prevPage} isDisabled={pageNumber === 0} />
      <StyledRightArrow
        src={Arrow}
        onClick={nextPage}
        isDisabled={pageNumber === Math.ceil(isComments.length / itemsPerPage) - 1}
      />
      {isOpenModal && (
        <CommonModal
          diaryId={diaryid}
          onCloseModal={handleCloseModal}
          fetchComment={fetchComment}
        />
      )}
    </>
  );
};
