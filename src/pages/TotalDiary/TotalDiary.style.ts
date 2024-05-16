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
  z-index: 3;
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

export const StyledNoneContaier = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  top: 33%;
  @media (min-width: 1601px) and (max-width: 1920px) {
    top: 40%;
    margin-top: 10%;
  }
`;

export const StyledText = styled.div`
  color: #fffaec;
  text-align: center;
  margin-top: 10px;
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

export const StyledIcons = styled.img`
  width: 140px;
  height: 140px;
`;

export const StyledBtn = styled.button`
  background: url('../../assets/DropDown.svg') #d7ccae -788.11px -95.564px / 501.061% 243.323%
    no-repeat;
  margin-top: 10px;
  width: 170px;
  height: 70px;
  border-radius: 20px;
  border: 5px solid #511f05;
  color: #511f05;
  font-family: SSMullaeler;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
  box-shadow:
    inset 0px -6px 2px #ab9274,
    0px 5px #762a10;
  cursor: pointer;
`;
