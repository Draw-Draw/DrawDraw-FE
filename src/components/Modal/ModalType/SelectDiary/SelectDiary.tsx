import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalTextContainer,
  StyledTitleText,
} from './SelectDiary.style';
import CloseBtn from '../../../../assets/buttons/CloseBtn.svg';

interface SelectDiaryModalProps {
  onCloseModal?: () => void;
}

export const SelectDiaryModal = ({ onCloseModal }: SelectDiaryModalProps) => {
  const handleCloseBtn = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  return (
    <StyledModalTextContainer>
      <StyledTitleText>일기를 작성할 일기장을 선택해주세요!</StyledTitleText>
      <StyledBtnContainer>
        <StyledBtn src={CloseBtn} onClick={handleCloseBtn} />
      </StyledBtnContainer>
    </StyledModalTextContainer>
  );
};
