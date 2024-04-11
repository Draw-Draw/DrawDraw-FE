import styled from 'styled-components';
import Background from '../../assets/Background.png';

export const StyledBackground = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 100vh;
`;

export const StyledLoadingContaier = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 33%;
  @media (min-width: 1601px) and (max-width: 1920px) {
    top: 40%;
  }
`;

export const StyledText = styled.div`
  color: #fffaec;
  text-align: center;
  -webkit-text-stroke-width: 1.3265305757522583;
  -webkit-text-stroke-color: #762a10;
  font-family: SSMullaeler;
  font-size: 45.694px;
  font-style: normal;
  font-weight: 400;
  line-height: 85.831px;
  text-shadow: 0px 4px #762a10;
  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 65.694px;
  }
`;

interface IconProps {
  type: string;
}

export const StyledIcons = styled.img<IconProps>`
  width: ${(props) =>
    props.type === 'Sunny'
      ? '118px'
      : props.type === 'Cloud'
        ? '135px'
        : props.type === 'Moon'
          ? '112px'
          : props.type === 'Rainbow'
            ? '152px'
            : props.type === 'Rainy'
              ? '132px'
              : props.type === 'Snow'
                ? '93px'
                : 'inherit'};

  height: ${(props) =>
    props.type === 'Sunny'
      ? '118px'
      : props.type === 'Cloud'
        ? '135px'
        : props.type === 'Moon'
          ? '112px'
          : props.type === 'Rainbow'
            ? '152px'
            : props.type === 'Rainy'
              ? '132px'
              : '93px'};
`;
