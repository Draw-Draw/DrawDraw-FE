import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 9999px;
  top: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledCardClip = styled.img`
  width: 817px;
  z-index: 9999px;

  @media (max-width: 1600px) {
    /* width: 700px; */
  }
`;
