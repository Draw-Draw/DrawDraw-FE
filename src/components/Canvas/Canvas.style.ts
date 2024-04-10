import styled from 'styled-components';

export const StyledCanvas = styled.div`
  position: absolute;
  margin-top: 17%;
  margin-left: 6%;
  height: 64%;
  /* overflow: hidden; */
  z-index: 3;

  @media (min-width: 1601px) and (max-width: 1920px) {
    height: 68%;
  }
  @media (max-width: 1366px) {
    height: 62%;
    margin-left: 6%;
  }
`;

export const StyledTestBtn = styled.button`
  z-index: 9999;
`;
