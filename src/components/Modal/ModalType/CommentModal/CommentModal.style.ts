import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  z-index: 9999;
  margin-top: 20px;
`;

export const StyledInputComment = styled.textarea`
  background-attachment: local;
  background-color: transparent;
  background-image: repeating-linear-gradient(
    #0000 0 calc(1lh - 4px),
    #672909 0 calc(1lh - 1px),
    transparent calc(1lh - 1px),
    transparent 1lh
  );
  line-height: 49px;
  letter-spacing: 2px;
  resize: none;
  color: #672909;
  font-family: SSMullaeler;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
`;

export const StyledDoneBtn = styled.img`
  position: relative;
  width: 110px;
  bottom: -65px;
  right: -270px;
  cursor: pointer;
`;
