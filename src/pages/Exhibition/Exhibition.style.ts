import styled from 'styled-components';
import Background from '../../assets/Background.png';

export const StyledContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 110vh;
  text-align: center;
`;

export const StyledBoardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -4%;
`;

export const StyledGreenBoard = styled.img`
  width: 1100px;
  position: relative;

  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 1300px;
  }
`;

export const StyledSketchBookContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const StyledEmptySketchBook = styled.img`
  position: absolute;
  width: 450px;
  right: -35px;
  bottom: -24px;

  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 540px;
    right: -38px;
    bottom: -24px;
  }
`;

export const StyledImage = styled.img`
  position: relative;
  width: 380px;

  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 460px;
  }
`;

export const StyledTodayDiaryGrid = styled.div`
  position: absolute;
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(2, 470px);
  grid-template-rows: repeat(2, 240px);
  align-items: center;
  justify-items: center;

  @media (min-width: 1601px) and (max-width: 1920px) {
    margin-top: 100px;
    grid-template-columns: repeat(2, 560px);
    grid-template-rows: repeat(2, 280px);
  }
`;
