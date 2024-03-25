import {
  StyledContainer,
  StyledKakaoBtn,
  StyledLogo,
  StyledLogoContainer,
  StyledSketchBook,
  StyledSketchContainer,
} from './Landing.style';
import EmptySketchBook from '../../assets/EmptySketchBook.svg';
import Logo from '../../assets/Logo.png';
import KakaoLogin from '../../assets/KakaoLogin.png';

export const Landing = () => {
  return (
    <StyledContainer>
      <StyledSketchContainer>
        <StyledSketchBook src={EmptySketchBook} alt="sketchbook" />
        <StyledLogoContainer>
          <StyledLogo src={Logo} />
          <StyledKakaoBtn src={KakaoLogin} />
        </StyledLogoContainer>
      </StyledSketchContainer>
    </StyledContainer>
  );
};
