import {
  StyledModalContainer,
  StyledStamp,
  StyledStampGrid,
  StyledTitleText,
} from './StampModal.style';
import BlueStamp from '../../../../assets/Stamps/BlueStamp.svg';
import PurpleStamp from '../../../../assets/Stamps/PurpleStamp.svg';
import OrangeStamp from '../../../../assets/Stamps/OrangeStamp.svg';
import YellowStamp from '../../../../assets/Stamps/YellowStamp.svg';
import RedStamp from '../../../../assets/Stamps/RedStamp.svg';
import GreenStamp from '../../../../assets/Stamps/GreenStamp.svg';
import { useSetModalType } from '../../../../hook/useSetModalType';
import { useRecoilState } from 'recoil';
import { PostCommentState } from '../../../../recoil/PostCommentState';
import { CommentType } from '../../../../types/Comment.type';

interface Props {
  diaryId?: string;
  onCloseModal?: () => void;
}

export const StampModal = ({ diaryId, onCloseModal }: Props) => {
  const setModalType = useSetModalType();
  const [commentState, setCommentState] = useRecoilState(PostCommentState);

  if (onCloseModal) {
    console.log('?');
    onCloseModal();
  }

  const handleModalType = (stampType: string) => {
    setCommentState((prevPostCommentState: CommentType) => ({
      ...prevPostCommentState,
      stampType: stampType,
    }));
    setModalType('COMMENT');
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onCloseModal) {
      onCloseModal();
    }
    event.stopPropagation();
  };

  return (
    <StyledModalContainer onClick={handleContainerClick}>
      <StyledTitleText>도장을 선택해주세요!</StyledTitleText>
      <StyledStampGrid>
        <StyledStamp type="blue" src={BlueStamp} onClick={() => handleModalType('BLUE')} />
        <StyledStamp type="green" src={GreenStamp} onClick={() => handleModalType('GREEN')} />
        <StyledStamp type="purple" src={PurpleStamp} onClick={() => handleModalType('PURPLE')} />
        <StyledStamp type="yellow" src={YellowStamp} onClick={() => handleModalType('YELLOW')} />
        <StyledStamp type="red" src={RedStamp} onClick={() => handleModalType('RED')} />
        <StyledStamp type="orange" src={OrangeStamp} onClick={() => handleModalType('ORANGE')} />
      </StyledStampGrid>
    </StyledModalContainer>
  );
};
