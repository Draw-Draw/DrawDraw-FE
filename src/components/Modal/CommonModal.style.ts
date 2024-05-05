import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledCardClip = styled.img`
  width: 817px;
  z-index: 10000;

  @media (max-width: 1600px) {
    /* width: 700px; */
  }
`;
