import styled from 'styled-components';

export const StyledModalTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  z-index: 9999;
`;

export const StyledTitleText = styled.div`
  font-family: SSMullaeler;
  color: #511f05;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export const StyledWeatherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 140px);
  grid-template-rows: repeat(2, 140px);
  align-items: center;
  justify-items: center;
`;

export const StyledSunnyIcon = styled.img`
  width: 121px;
  cursor: pointer;
  &:hover {
    width: 128px;
  }
`;

export const StyledCloudIcon = styled.img`
  width: 115px;
  cursor: pointer;
  &:hover {
    width: 122px;
  }
`;

export const StyledMoonIcon = styled.img`
  width: 92px;
  cursor: pointer;
  &:hover {
    width: 99px;
  }
`;

export const StyledRainbowIcon = styled.img`
  width: 132px;
  cursor: pointer;
  &:hover {
    width: 139px;
  }
`;

export const StyledRainyIcon = styled.img`
  width: 112px;
  cursor: pointer;
  &:hover {
    width: 119px;
  }
`;

export const StyledSnowIcon = styled.img`
  width: 73px;
  cursor: pointer;
  &:hover {
    width: 80px;
  }
`;
