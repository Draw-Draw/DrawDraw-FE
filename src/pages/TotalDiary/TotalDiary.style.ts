import styled from 'styled-components';
import Background from '../../assets/Background.svg';

export const StyledContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 120vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const StyledDiaryContainer = styled.div`
  width: 60vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  top: -8%;
`;

export const StyledDrawingBook = styled.img`
  position: relative;
  width: 60vw;
`;

export const StyledPageSlide = styled.input`
  accent-color: #4f1d03;
  background: #d7ccae;
  -webkit-appearance: none;
  width: 500px;
  height: 10px;
  border-radius: 12px;
  border: 3px solid #4f1d03;
  outline: none;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4f1d03;
    border: 3px solid #4f1d03;
    cursor: pointer;
    transform: translateY(-0.25rem);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4f1d03;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    cursor: pointer;
    accent-color: #4f1d03;
    border: 3px solid #4f1d03;
    background: #d7ccae;
    border-radius: 12px;
    border: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    accent-color: #4f1d03;
    flood-color: #d7ccae;
    border-radius: 12px;
    border: none;
  }
`;

export const StyledRangeText = styled.div`
  color: #fffaec;
  text-align: center;
  text-shadow: 3px 2px 3px #672909;
  font-family: SSMullaeler;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 44.57px;
`;

export const StyledRangeContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  bottom: 2%;
  z-index: 9000;
`;
