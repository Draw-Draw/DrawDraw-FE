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
  display: flex;
  flex-direction: row;
  gap: 29px;
  margin-top: 70px;
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
  gap: 10px;
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
  border-top: 4.5px solid #672909;
  border-bottom: 4.5px solid #672909;
`;

export const StyledText = styled.div`
  z-index: 3;
  margin-top: 21px;
  padding-left: 30px;
  padding-right: 30px;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 10px;
  word-spacing: 4px;
`;

export const StyledStamp = styled.img`
  position: relative;
  bottom: 180px;
  left: 110px;
  width: 133px;
  opacity: 0.57;
  z-index: 2;
`;

export const StyledLogo = styled.img`
  width: 130px;
  margin-top: 8px;
  /* margin-bottom: 70px; */
`;
