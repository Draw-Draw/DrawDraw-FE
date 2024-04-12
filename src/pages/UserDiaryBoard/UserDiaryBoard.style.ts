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

export const StyledEmptySketchBook = styled.img`
  width: 280px;

  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 310px;
  }
`;

export const StyledTodayDiaryGrid = styled.div`
  position: absolute;
  padding-top: 30px;
  height: 480px;
  overflow-y: scroll;
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 240px);
  align-items: center;
  justify-items: center;

  @media (min-width: 1601px) and (max-width: 1920px) {
    margin-top: 70px;
    height: 500px;
    grid-template-columns: repeat(3, 330px);
    grid-template-rows: repeat(2, 270px);
  }
`;

export const StyledSketchBookTitle = styled.div`
  position: relative;
  color: #762a10;
  text-align: center;
  font-family: SSMullaeler;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 40.284px; /* 179.731% */
  z-index: 9999;
  top: -158px;
  @media (min-width: 1601px) and (max-width: 1920px) {
    grid-template-columns: repeat(3, 330px);
    grid-template-rows: repeat(2, 270px);
    top: -174px;
  }
`;

export const StyledUserDiary = styled.div`
  position: relative;
`;

export const StyledSketchBookSchool = styled.div`
  position: relative;
  color: #762a10;
  text-align: center;
  font-family: SSMullaeler;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 40.284px; /* 179.731% */
  z-index: 9999;
  top: -104px;
  right: -30px;
  @media (min-width: 1601px) and (max-width: 1920px) {
    grid-template-columns: repeat(3, 330px);
    grid-template-rows: repeat(2, 270px);
    top: -108px;
  }
`;

export const StyledSketchBookName = styled.div`
  position: relative;
  color: #762a10;
  text-align: center;
  font-family: SSMullaeler;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 40.284px; /* 179.731% */
  z-index: 9999;
  top: -144px;
  right: -85px;
  @media (min-width: 1601px) and (max-width: 1920px) {
    grid-template-columns: repeat(3, 330px);
    grid-template-rows: repeat(2, 270px);
    top: -108px;
  }
`;
