import styled from 'styled-components';
import Background from '../../assets/Background.svg';

export const StyledContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 100vh;
`;

export const StyledLogo = styled.img`
  width: 204px;
  margin-left: 55px;
  margin-top: 38px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 817px;
  margin: auto;
  display: block;
  text-align: center;
`;

export const StyledCardClip = styled.img`
  width: 817px;
  margin: auto;
  display: block;
`;

export const StyledTitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 32px;
  top: 30%;
  left: 35%;
`;

export const StyledTitleText = styled.div`
  font-family: SSMullaeler;
  color: #511f05;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
`;

export const StyledInput = styled.input`
  width: 240.996px;
  text-align: center;
  font-family: SSMullaeler;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 64.703px;
  border-bottom: solid 2.5px #672909;
  &::placeholder {
    color: rgba(118, 42, 16, 0.43);
  }
`;

export const StyledSelectBtn = styled.img`
  width: 157.466px;
`;
