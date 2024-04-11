import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 140px;
  top: 22%;
`;

export const StyledBackground = styled.img`
  width: 185px;
  position: absolute;
`;

export const StyledSmallBackground = styled.img`
  width: 80px;
  position: absolute;
  right: -240px;
  z-index: 0;
`;

export const StyledIconContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 100px;
  transform: translateY(13.5%);
  z-index: 9999;
`;

export const StyledIcon = styled.img`
  width: 55px;
  cursor: pointer;
  z-index: 9999;
`;

export const StyledInputColor = styled.input`
  width: 55px;
  height: 55px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;

  &::-webkit-color-swatch {
    border-radius: 30px;
    border: solid 5px #672909;
  }
  position: relative;
`;

export const StyledRange = styled.input`
  position: absolute;
  transform: rotate(-90deg);
  right: -110px;
  top: 150px;
  accent-color: #4f1d03;
  background: #d7ccae;
  -webkit-appearance: none;
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
