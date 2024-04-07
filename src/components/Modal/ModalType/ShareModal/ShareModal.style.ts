import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  z-index: 10000;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitleText = styled.div`
  z-index: 10000;
  font-family: SSMullaeler;
  color: #511f05;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 78.766px;
`;

export const StyledQRCode = styled.div`
  z-index: 10000;
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 23px;
`;

export const StyledBtn = styled.img`
  z-index: 10000;
  width: 115px;
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
  margin-top: 30px;
`;
