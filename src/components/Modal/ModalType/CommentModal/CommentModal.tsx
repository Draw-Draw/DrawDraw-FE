import { StyledDoneBtn, StyledInputComment, StyledModalContainer } from './CommentModal.style';
import DoneBtn from '../../../../assets/buttons/DoneBtn.svg';

export const CommentModal = () => {
  return (
    <StyledModalContainer>
      <StyledInputComment rows={2} cols={30} maxLength={50} />
      <StyledDoneBtn src={DoneBtn} />
    </StyledModalContainer>
  );
};
