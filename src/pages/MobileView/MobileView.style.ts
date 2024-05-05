import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0px auto;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 768px;
  margin: 0 auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
