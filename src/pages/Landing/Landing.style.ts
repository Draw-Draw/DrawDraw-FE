import styled from 'styled-components';
import Background from '../../assets/Background.svg';

export const StyledContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 100vh;
`;

export const StyledSketchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSketchBook = styled.img`
  width: 70vw;
  height: 95vh;
  margin-top: 3.5vh;
`;

export const StyledLogoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  margin-bottom: 10vh;
`;

export const StyledLogo = styled.img`
  width: 31vw;
`;

export const StyledKakaoBtn = styled.img`
  width: 14vw;
`;
