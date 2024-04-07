import { useEffect, useState } from 'react';
import CommentSketchBook from '../../assets/CommentSketchBook.svg';
import {
  StyledComment,
  StyledCommentBook,
  StyledCommentContainer,
  StyledCommentText,
  StyledNickname,
  StyledPlusBtn,
  StyledStamp,
  StyledText,
} from './Comment.style';
import BlueStamp from '../../assets/Stamps/BlueStamp.svg';
import PurpleStamp from '../../assets/Stamps/PurpleStamp.svg';
import RedStamp from '../../assets/Stamps/RedStamp.svg';
import GreenStamp from '../../assets/Stamps/GreenStamp.svg';
import PlusBtn from '../../assets/buttons/PlusBtn.svg';
import { CommonModal } from '../Modal/CommonModal';
import { useSetModalType } from '../../hook/useSetModalType';

export const Comment = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const setModalType = useSetModalType();

  useEffect(() => {
    setIsOpenModal(false);
    setModalType('STAMP');
  }, []);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <StyledCommentBook src={CommentSketchBook} />
      <StyledCommentContainer>
        <StyledComment>
          <StyledStamp src={BlueStamp} />
          <StyledCommentText>
            <StyledNickname>닉네임</StyledNickname>
            <StyledText>
              일기너무재밌다 나도 다음에 같이 놀자 어쩌구 저쩌구 우하하하하하하핳 심심하다
            </StyledText>
          </StyledCommentText>
        </StyledComment>
        <StyledComment>
          <StyledStamp src={PurpleStamp} />
          <StyledCommentText>
            <StyledNickname>닉네임</StyledNickname>
            <StyledText>
              일기너무재밌다 나도 다음에 같이 놀자 어쩌구 저쩌구 우하하하하하하핳 심심하다
            </StyledText>
          </StyledCommentText>
        </StyledComment>
        <StyledComment>
          <StyledStamp src={RedStamp} />
          <StyledCommentText>
            <StyledNickname>닉네임</StyledNickname>
            <StyledText>
              일기너무재밌다 나도 다음에 같이 놀자 어쩌구 저쩌구 우하하하하하하핳 심심하다
            </StyledText>
          </StyledCommentText>
        </StyledComment>
        <StyledComment>
          <StyledStamp src={GreenStamp} />
          <StyledCommentText>
            <StyledNickname>닉네임</StyledNickname>
            <StyledText>
              일기너무재밌다 나도 다음에 같이 놀자 어쩌구 저쩌구 우하하하하하하핳 심심하다
            </StyledText>
          </StyledCommentText>
        </StyledComment>
        <StyledPlusBtn src={PlusBtn} onClick={handleOpenModal} />
      </StyledCommentContainer>
      {isOpenModal && <CommonModal />}
    </>
  );
};
