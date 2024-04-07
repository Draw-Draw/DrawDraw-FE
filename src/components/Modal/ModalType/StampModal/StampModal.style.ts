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

export const StyledTitleText = styled.div`
  font-family: SSMullaeler;
  color: #511f05;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export const StyledStampGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: repeat(2, 150px);
  align-items: center;
  justify-items: center;
`;

interface StampProps {
  type: string;
}

export const StyledStamp = styled.img<StampProps>`
  width: 140px;
  cursor: pointer;
  &:hover {
    width: 160px;
  }
  transform: ${(props) =>
    props.type === 'blue'
      ? 'rotate(-20deg)'
      : props.type === 'green'
        ? 'rotate(12deg)'
        : props.type === 'purple'
          ? 'rotate(18deg)'
          : props.type === 'yellow'
            ? 'rotate(20deg)'
            : props.type === 'red'
              ? 'rotate(-25deg)'
              : 'rotate(-20deg)'};
`;
