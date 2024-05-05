import styled from 'styled-components';

export const StyledContainer = styled.div`
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

export const StyledImage = styled.img`
  position: absolute;
  width: 53vw;
  margin-right: 10px;
  margin-top: 18%;
  z-index: 9999;
`;

interface TextProps {
  $isInputText: boolean;
  $isDay?: boolean;
}

export const StyledDiaryText = styled.div<TextProps>`
  position: absolute;
  z-index: 9999;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  margin-top: 12.5%;
  margin-right: 72%;
  /* margin-top: ${(props) => (props.$isInputText ? '0%' : props.$isDay ? '12.5%' : '-4.3%')};
  margin-right: ${(props) => (props.$isInputText ? '0%' : props.$isDay ? '73%' : '-5%')};

  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    margin-top: ${(props) => (props.$isInputText ? '0%' : props.$isDay ? '13%' : '-3.4%')};
  }
  @media (max-width: 1366px) {
    font-size: 30px;
  } */
`;

export const StyledDiaryDayText = styled.div`
  position: absolute;
  z-index: 9999;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  margin-top: 12.5%;
  margin-right: 35%;
`;

export const StyledDiaryWeatherText = styled.div`
  position: absolute;
  z-index: 9999;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  margin-top: 12.5%;
  margin-right: -4%;
`;

export const StyledDaySelectContainer = styled.div`
  z-index: 9999.1;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10%;
  margin-right: -30%;
  /* @media (min-width: 1601px) and (max-width: 1920px) {
    top: 140px;
    left: 58%;
  }
  @media (max-width: 1366px) {
    top: 85px;
    left: 58%;
  } */
`;

interface IconProps {
  type: string;
}

export const StyledIcon = styled.img<IconProps>`
  z-index: 10000;
  width: ${(props) =>
    props.type === 'SUNNY'
      ? '98px'
      : props.type === 'CLOUDY'
        ? '115px'
        : props.type === 'MOON'
          ? '92px'
          : props.type === 'RAINBOW'
            ? '132px'
            : props.type === 'RAINY'
              ? '112px'
              : props.type === 'SNOWY'
                ? '73px'
                : 'inherit'};

  top: 0%;
  left: 58%;
  @media (min-width: 1601px) and (max-width: 1920px) {
    top: 16%;
    left: 58%;
  }
  @media (max-width: 1366px) {
    font-size: 30px;
    top: 10%;
    left: 58%;
    width: ${(props) =>
      props.type === 'SUNNY'
        ? '105px'
        : props.type === 'CLOUDY'
          ? '98px'
          : props.type === 'MOON'
            ? '75px'
            : props.type === 'RAINBOW'
              ? '115px'
              : props.type === 'RAINY'
                ? '95px'
                : props.type === 'SNOWY'
                  ? '56px'
                  : 'inherit'};
  }
`;

export const StyledDiaryWeatherSelectText = styled.div`
  position: absolute;
  width: 180px;
  z-index: 9999;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  margin-left: 110px;
`;

export const StyledInputDiary = styled.div`
  position: absolute;
  z-index: 9999;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 31px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  text-align: left;
  width: 55vw;
  height: fit-content;
  word-wrap: normal;
  letter-spacing: 20px;
  word-spacing: 2px;
  margin-top: 52%;
  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    line-height: 54px;
    margin-top: 52%;
  }
  @media (max-width: 1366px) {
    font-size: 25px;
    height: 180px;
    letter-spacing: 16.5px;
    line-height: 40px;
    margin-top: 52%;
  }
`;
