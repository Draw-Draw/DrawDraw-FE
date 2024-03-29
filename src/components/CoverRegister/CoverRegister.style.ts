import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledDiaryContainer = styled.div`
  width: 55%;
  margin: 0 auto;
  position: relative;
`;

export const StyledCover = styled.img`
  position: absolute;
  width: 100%;
  right: 0%;
`;

interface SelectBtnProps {
  valid: boolean;
}

export const StyledSelectBtn = styled.img<SelectBtnProps>`
  position: absolute;
  bottom: 5%;
  right: 10%;
  width: 140px;
  z-index: 900px;
  cursor: ${(props) => (props.valid ? 'pointer' : 'not-allowed')};
  pointer-events: ${(props) => (props.valid ? 'auto' : 'none')};
`;

export const StyledInput = styled.div`
  position: absolute;
  right: 20%;
`;

export const StyledDiaryTitleInput = styled.input`
  position: relative;
  margin-top: 29%;
  width: 223px;
  text-align: center;
  font-family: SSMullaeler;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 64.703px;
  &::placeholder {
    color: rgba(118, 42, 16, 0.43);
  }

  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 260px;
    font-size: 42px;
    margin-top: 30%;
  }
`;

export const StyledSchoolInput = styled.input`
  position: absolute;
  margin-top: 63%;
  right: 26%;
  width: 223px;
  text-align: center;
  font-family: SSMullaeler;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 64.703px;

  &::placeholder {
    color: rgba(118, 42, 16, 0.43);
  }

  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 140px;
    font-size: 36px;
    margin-top: 63.6%;
    right: 32%;
  }
`;

export const StyledNameInput = styled.input`
  position: absolute;
  margin-top: 63%;
  right: 6%;
  width: 223px;
  text-align: center;
  font-family: SSMullaeler;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 64.703px;

  &::placeholder {
    color: rgba(118, 42, 16, 0.43);
  }

  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 140px;
    font-size: 36px;
    margin-top: 63.6%;
    right: 12.5%;
  }
`;
