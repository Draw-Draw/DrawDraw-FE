import styled from 'styled-components';

export const StyledCommentBook = styled.img`
  position: absolute;
  width: 68vw;
  z-index: 1;
`;

export const StyledCommentContainer = styled.div`
  position: relative;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 3;
  align-items: center;
`;

export const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const StyledCommentText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 680px;
`;

export const StyledStamp = styled.img`
  width: 124px;
`;

export const StyledNickname = styled.div`
  color: rgba(103, 41, 9, 0.53);
  font-family: SSMullaeler;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
`;

export const StyledText = styled.div`
  color: #672909;
  font-family: SSMullaeler;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 128.453% */
`;

export const StyledPlusBtn = styled.img`
  width: 110px;
  z-index: 3;
  cursor: pointer;
`;

export const StyledBookMarkedContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 115%;
  margin-top: 11%;
`;

export const StyledBookMarked = styled.img`
  width: 190px;
  cursor: pointer;
  &:hover {
    margin-left: 10%;
  }
`;
