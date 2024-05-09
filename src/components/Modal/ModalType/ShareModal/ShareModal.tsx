import { useLocation } from 'react-router-dom';
import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalContainer,
  StyledTitleText,
} from './ShareModal.style';
import LinkCopyBtn from '../../../../assets/buttons/LinkCopyBtn.svg';
import Logo from '../../../../assets/Logo.png';
import QR from 'qrcode.react';

export const ShareModal = ({
  diaryId,
  diarybookId,
}: {
  diaryId: number | undefined;
  diarybookId: string | undefined;
}) => {
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
        value={`https://www.draw-draw.site/${diarybookId}/${diaryId}/share`}
        size={200}
        imageSettings={{ src: Logo, width: 100, height: 40, excavate: false }}
        id="qr-gen"
        level={'H'}
        includeMargin={true}
        bgColor={'white'}
        fgColor={'black'}
      />
      <StyledBtnContainer>
        <StyledBtn
          src={LinkCopyBtn}
          onClick={() => handleCopyClipBoard(`https://www.draw-draw.site${location.pathname}`)}
        />
      </StyledBtnContainer>
    </StyledModalContainer>
  );
};
