import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalTextContainer,
  StyledSubText,
  StyledTitleText,
} from './PublicModal.style';
import PublicBtn from '../../../../assets/buttons/PublicBtn.svg';
import PrivateBtn from '../../../../assets/buttons/PrivateBtn.svg';
import { useSetModalType } from '../../../../hook/useSetModalType';

export const PublicModal = () => {
  const setModalType = useSetModalType();

  const handleModalType = () => {
    setModalType('GODRAW');
  };
  return (
    <StyledModalTextContainer>
      <div>
        <StyledTitleText>이 일기장을 공개할건가요?</StyledTitleText>
        <StyledSubText>
          공개 설정을 하면, 모든 친구들이 볼 수 있어요.
          <br />
          비공개 설정을 하면, 나만 볼 수 있어요.
        </StyledSubText>
      </div>
      <StyledBtnContainer>
        <StyledBtn src={PublicBtn} onClick={handleModalType} />
        <StyledBtn src={PrivateBtn} onClick={handleModalType} />
      </StyledBtnContainer>
    </StyledModalTextContainer>
  );
};
