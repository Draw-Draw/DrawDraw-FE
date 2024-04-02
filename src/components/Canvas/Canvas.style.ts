import styled from 'styled-components';

export const StyledCanvas = styled.div`
  position: absolute;
  margin-top: 17%;
  margin-right: 10px;
  height: 64%;
  overflow: hidden;

  @media (min-width: 1601px) and (max-width: 1920px) {
    height: 68%;
  }
  @media (max-width: 1366px) {
    height: 62%;
  }
`;
