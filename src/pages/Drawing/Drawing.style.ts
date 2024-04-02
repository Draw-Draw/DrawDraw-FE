import styled from 'styled-components';
import Background from '../../assets/Background.svg';

export const StyledContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 120vh;
  text-align: center;
`;

export const StyledDrawingBook = styled.img`
  position: absolute;
  width: 68vw;
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

interface TextProps {
  $isInputText: boolean;
  $isDay?: boolean;
}

export const StyledDrawingText = styled.div<TextProps>`
  position: relative;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  margin-top: ${(props) => (props.$isInputText ? '0%' : props.$isDay ? '12.5%' : '-4.3%')};
  margin-right: ${(props) => (props.$isInputText ? '0%' : props.$isDay ? '73%' : '-5%')};

  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    margin-top: ${(props) => (props.$isInputText ? '0%' : props.$isDay ? '13%' : '-3.4%')};
  }
  @media (max-width: 1366px) {
    font-size: 30px;
  }
`;

export const StyledDrawingInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  margin-top: -4%;
  margin-right: 35%;

  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    margin-top: -3%;
  }
  @media (max-width: 1366px) {
    font-size: 30px;
    margin-top: -6%;
  }
`;

interface DayInputProps {
  type: string;
}

export const StyledDrawingInput = styled.input<DayInputProps>`
  position: relative;
  width: ${(props) => (props.type === 'isyear' ? '80px' : '42px')};
  color: #672909;
  font-family: SSMullaeler;
  font-size: 31px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: ${(props) => (props.value ? 'transparent' : 'solid 2.5px #672909')};
  height: 35px;
  margin-left: 18px;

  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    width: ${(props) => (props.type === 'isyear' ? '102px' : '52px')};
  }
  @media (max-width: 1366px) {
    font-size: 30px;
    width: ${(props) => (props.type === 'isyear' ? '70px' : '32px')};
  }
`;

export const StyledDaySelect = styled.div`
  position: relative;
  color: rgba(103, 41, 9, 0.38);
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  margin-top: -4.3%;
  margin-right: -45%;

  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    margin-top: -3.4%;
  }
  @media (max-width: 1366px) {
    font-size: 30px;
  }

  cursor: pointer;
`;

export const StyledInputDiary = styled.textarea`
  position: relative;
  width: 80%;
  height: 250px;
  word-wrap: normal;
  letter-spacing: 20px;
  word-spacing: 2px;
  color: #672909;
  font-family: SSMullaeler;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 31px;
  font-style: normal;
  font-weight: 400;
  line-height: 49px;
  margin-top: -2%;
  margin-right: -2%;
  resize: none;
  overflow-x: hidden;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  overflow: hidden;
  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    line-height: 54px;
    margin-top: -2.5%;
  }
  @media (max-width: 1366px) {
    font-size: 25px;
    letter-spacing: 16.5px;
    line-height: 35px;
    margin-top: -3%;
  }
`;

interface IconProps {
  type: string;
}

export const StyledIcon = styled.img<IconProps>`
  position: relative;
  width: ${(props) =>
    props.type === 'Sunny'
      ? '121px'
      : props.type === 'Cloud'
        ? '115px'
        : props.type === 'Moon'
          ? '92px'
          : props.type === 'Rainbow'
            ? '132px'
            : props.type === 'Rainy'
              ? '112px'
              : props.type === 'Snow'
                ? '73px'
                : 'inherit'};

  top: -80px;
  left: 200px;
`;

export const StyledDrawingDayText = styled.div<TextProps>`
  position: relative;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  top: -120px;
  left: 340px;

  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 40px;
    margin-top: ${(props) => (props.$isInputText ? '0%' : props.$isDay ? '13%' : '-3.4%')};
  }
  @media (max-width: 1366px) {
    font-size: 30px;
  }
`;

interface SelectBtnProps {
  valid?: boolean;
}

export const StyledSelectBtn = styled.img<SelectBtnProps>`
  position: absolute;
  bottom: 5%;
  right: 8%;
  width: 140px;
  z-index: 900px;
  cursor: ${(props) => (props.valid ? 'pointer' : 'not-allowed')};
  pointer-events: ${(props) => (props.valid ? 'auto' : 'none')};
`;
