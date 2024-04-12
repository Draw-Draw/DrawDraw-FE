import { useEffect, useState } from 'react';
import CommentSketchBook from '../../assets/CommentSketchBook.svg';
import {
  StyledBookMarked,
  StyledBookMarkedContainer,
  StyledComment,
  StyledCommentBook,
  StyledCommentContainer,
  StyledCommentText,
  StyledNickname,
  StyledPlusBtn,
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
  };

  const handleCloseModal = () => {
    if (modalType === 'COMMENT') {
      setIsOpenModal(false);
    }
  };

  return (
    <>
      <StyledCommentBook src={CommentSketchBook} />
      <StyledCommentContainer>
        {isComments &&
          isComments.map((item, index) => (
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
