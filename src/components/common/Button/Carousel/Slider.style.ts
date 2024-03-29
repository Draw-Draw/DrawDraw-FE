import styled from 'styled-components';

interface SliderProps {
  check: string;
  src: string;
}

export const NowSlider = styled.div<SliderProps>`
  width: ${(props) => (props.check === 'now' ? '55%' : '35%')};
  height: 20%;
  z-index: ${(props) => (props.check === 'now' ? 3 : 2)};
  padding-top: ${(props) => (props.check === 'now' ? '30%' : '25%')};
  transform: translate(-50%, -50%);
  transition: all ease-in-out 0.5s;
  position: absolute;
  top: 55%;

  left: ${(props) =>
    (props.check === 'now' && '50%') ||
    (props.check === 'next' && '80%') ||
    (props.check === 'prev' && '20%')};

  filter: ${(props) => (props.check === 'next' || props.check === 'prev') && 'brightness(0.5)'};

  background-image: url(${(props) => props.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;
