import styled from 'styled-components';

interface ContainerProps {
  $isTotal?: boolean;
}
export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 55px;
  padding-right: 55px;
`;

export const StyledLogo = styled.img`
  width: 204px;
  height: 72.6px;
  cursor: pointer;
`;

export const StyledBoxBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledBoxBtn = styled.img`
  height: 115px;
  width: 80px;
  cursor: pointer;
  position: relative;
`;

interface HeaderProps {
  $isDrawing?: boolean;
  $isTotal?: boolean;
}

export const StyledMenuDropDown = styled.div<HeaderProps>`
  position: absolute;
  margin-top: 98px;
  margin-left: ${(props) => (props.$isDrawing ? '-70px' : props.$isTotal ? '-70px' : '6px')};
  width: 140px;
  height: 210px;
  border-radius: 30px;
  border: 5px solid #511f05;
  color: #fffaec;
  box-shadow:
    inset 0px -6px 2px #ab9274,
    0px 5px #762a10;
  background: url('../../assets/DropDown.svg') #d7ccae -788.11px -95.564px / 501.061% 243.323%
    no-repeat;
  z-index: 9999;
`;

export const StyledTextBox = styled.div`
  width: 110px;
  height: 155px;
  margin-top: 16px;
  margin-left: 15px;
`;

export const StyledText = styled.div`
  color: #511f05;
  text-align: center;
  font-family: SSMullaeler;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 58px;
  text-align: center;
  border-radius: 10px;
  &:hover {
    background: #511f05;
    color: #d7ccae;
  }
  cursor: pointer;
`;
