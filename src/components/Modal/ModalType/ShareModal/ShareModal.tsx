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
import Logo from '../../../../assets/Logo.png';
import QR from 'qrcode.react';

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
      <QR
        value={'https://draw-draw-fe.vercel.app/:diarybookid/:diaryid/share'}
        size={200}
        imageSettings={{ src: Logo, width: 100, height: 50, excavate: false }}
        id="qr-gen"
        level={'H'}
        includeMargin={true}
        bgColor={'white'}
        fgColor={'black'}
      />
      {/* <StyledQRCode /> */}
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
