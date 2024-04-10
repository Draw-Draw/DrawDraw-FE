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
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const Kakao_Redirect_Uri = 'http://localhost:3000/auth';

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${Kakao_Redirect_Uri}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  return (
    <StyledContainer>
      <StyledSketchContainer>
        <StyledSketchBook src={EmptySketchBook} alt="sketchbook" />
        <StyledLogoContainer>
          <StyledLogo src={Logo} />
          <StyledKakaoBtn src={KakaoLogin} onClick={loginHandler} />
        </StyledLogoContainer>
      </StyledSketchContainer>
    </StyledContainer>
  );
};
