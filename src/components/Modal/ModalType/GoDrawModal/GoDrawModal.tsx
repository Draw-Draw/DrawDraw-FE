import { useNavigate } from 'react-router-dom';
import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalTextContainer,
  StyledSubText,
  StyledTitleText,
} from './GoDrawModal.style';
import YesBtn from '../../../../assets/buttons/YesBtn.svg';
import NoBtn from '../../../../assets/buttons/NoBtn.svg';

export const GoDrawModal = () => {
  const navigate = useNavigate();

  const handleGoMain = () => {
    navigate('/');
  };

  const handleGoDraw = () => {
    navigate('/drawing');
  };
  return (
    <StyledModalTextContainer>
      <div>
        <StyledTitleText>바로 오늘의 일기를 작성해볼까요?</StyledTitleText>
        <StyledSubText>여러분들의 이야기를 차곡차곡 채워주세요.</StyledSubText>
      </div>
      <StyledBtnContainer>
        <StyledBtn src={YesBtn} onClick={handleGoDraw} />
        <StyledBtn src={NoBtn} onClick={handleGoMain} />
      </StyledBtnContainer>
    </StyledModalTextContainer>
  );
};
