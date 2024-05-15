import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0px auto;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 768px;
  margin: 0 auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  background-color: #d8cdaf;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  overflow-x: hidden;
`;

export const StyledMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 54px;
  border-top: 4.5px solid #672909;
  border-bottom: 4.5px solid #672909;
  display: flex;
  flex-direction: row;
  gap: 29px;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 22.54px;
  font-style: normal;
  font-weight: 400;
  line-height: 38.318px;
  align-items: center;
  justify-content: center;
`;

export const StyledLine = styled.div`
  width: 4px;
  height: inherit;
  background-color: #672909;
`;

export const StyledDayContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
`;

interface IconProps {
  type: string;
}

export const StyledIcon = styled.img<IconProps>`
  z-index: 10000;
  width: ${(props) =>
    props.type === 'SUNNY'
      ? '57px'
      : props.type === 'CLOUDY'
        ? '75px'
        : props.type === 'MOON'
          ? '52px'
          : props.type === 'RAINBOW'
            ? '92px'
            : props.type === 'RAINY'
              ? '72px'
              : props.type === 'SNOWY'
                ? '33px'
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
        ? '75px'
        : props.type === 'CLOUDY'
          ? '58px'
          : props.type === 'MOON'
            ? '35px'
            : props.type === 'RAINBOW'
              ? '75px'
              : props.type === 'RAINY'
                ? '55px'
                : props.type === 'SNOWY'
                  ? '16px'
                  : 'inherit'};
  }
`;

export const StyledImg = styled.img`
  background-size: cover;
  height: 257px;
  border-bottom: 4.5px solid #672909;
`;

export const StyledText = styled.div`
  position: absolute;
  top: -8px;
  width: 84%;
  z-index: 3;
  margin-top: 14px;
  padding-left: 30px;
  padding-right: 30px;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 49px;
  letter-spacing: 10px;
  word-spacing: 4px;
`;

export const StyledStamp = styled.img`
  position: absolute;
  top: 240px;
  right: -15px;
  width: 180px;
  opacity: 0.6;
  z-index: 2;
`;

export const StyledLogo = styled.img`
  width: 140px;
  margin-top: 12px;
  margin-bottom: 10px;

  /* margin-bottom: 70px; */
`;

export const StyledLineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: fit-content;
  bottom: 0%;
`;

export const UnderlinedChar = styled.span`
  z-index: 0;
  position: relative;
  margin-top: 47px;
  width: 100%;
  height: 2px;
  background-color: rgba(103, 41, 9, 0.34);
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSaveBtn = styled.img`
  width: 120px;
  position: fixed;
  bottom: 2%;
  z-index: 9999;
`;
