import { useLocation } from 'react-router-dom';
import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalContainer,
  StyledQRCode,
  StyledTitleText,
} from './ShareModal.style';
import LinkCopyBtn from '../../../../assets/buttons/LinkCopyBtn.svg';
import SaveBtn from '../../../../assets/buttons/SaveBtn.svg';

export const ShareModal = () => {
  const location = useLocation();

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledModalContainer onClick={(e) => e.stopPropagation()}>
      <StyledTitleText>카메라로 QR코드를 인식하세요!</StyledTitleText>
      <StyledQRCode />
      <StyledBtnContainer>
        <StyledBtn
          src={LinkCopyBtn}
          onClick={() => handleCopyClipBoard(`http://localhost:3000${location.pathname}`)}
        />
        <StyledBtn src={SaveBtn} />
      </StyledBtnContainer>
    </StyledModalContainer>
  );
};
