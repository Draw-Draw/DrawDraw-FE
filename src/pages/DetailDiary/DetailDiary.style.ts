import styled from 'styled-components';
import Background from '../../assets/Background.svg';

export const StyledContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 120vh;
  text-align: center;
`;

export const StyledDrawingContainer = styled.div`
  width: 68vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  top: -8%;
`;

export const StyledDrawingBook = styled.img`
  position: absolute;
  width: 68vw;
  z-index: 1;
`;

export const StyledBookMarkedContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 100%;
  margin-top: 11%;
`;

export const StyledBookMarked = styled.img`
  width: 190px;
  cursor: pointer;
  &:hover {
    margin-left: 10%;
  }
`;
