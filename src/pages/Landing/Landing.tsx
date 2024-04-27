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
import { client } from '../../apis/client';
import { useEffect } from 'react';

export const Landing = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const Kakao_Redirect_Uri = 'http://localhost:3000/auth';

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${Kakao_Redirect_Uri}&response_type=code&prompt=login`;

  useEffect(() => {
    const fetchData = async () => {
      const search = new URLSearchParams(window.location.search);
      const code = search.get('code');

      if (code) {
        try {
          const response = await client.post('/api/v1/auth', {
            headers: {
              Authorization: code,
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching token:', error);
        }
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  const loginHandler = () => {
    window.location.href = link;
  };

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
