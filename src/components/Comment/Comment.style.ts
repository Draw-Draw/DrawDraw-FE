import styled from 'styled-components';

export const StyledCommentBook = styled.img`
  position: absolute;
  width: 68vw;
  z-index: 1;
`;

export const StyledCommentContainer = styled.div`
  position: absolute;
  width: 68vw;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 3;
  align-items: center;
  @media (min-width: 1601px) and (max-width: 1920px) {
    margin-top: 140px;
  }
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
  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 880px;
  }
`;

export const StyledStamp = styled.img`
  width: 15%;
  @media (min-width: 1601px) and (max-width: 1920px) {
    width: 15%;
  }
`;

export const StyledNickname = styled.div`
  color: rgba(103, 41, 9, 0.53);
  font-family: SSMullaeler;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.674px;
  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 34px;
  }
`;

export const StyledText = styled.div`
  color: #672909;
  font-family: SSMullaeler;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 128.453% */
  @media (min-width: 1601px) and (max-width: 1920px) {
    font-size: 34px;
  }
`;

export const StyledPlusBtn = styled.img`
  position: fixed;
  width: 110px;
  z-index: 3;
  cursor: pointer;
  margin-top: 36%;
  @media (min-width: 1601px) and (max-width: 1920px) {
    margin-top: 35%;
  }
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
