import { StyledBackground, StyledIcons, StyledLoadingContaier, StyledText } from './Loading.style';
import Sunny from '../../assets/weathers/Sunny.png';
import Cloud from '../../assets/weathers/Cloud.png';
import Moon from '../../assets/weathers/Moon.png';
import Rainbow from '../../assets/weathers/Rainbow.png';
import Rainy from '../../assets/weathers/Rainy.png';
import Snow from '../../assets/weathers/Snow.png';
import { useEffect, useState } from 'react';

export const Loading = () => {
  const icons = [Sunny, Cloud, Moon, Rainbow, Rainy, Snow];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBackground>
      <StyledLoadingContaier>
        <StyledText>오늘의 날씨는~</StyledText>
        <StyledIcons src={icons[currentIconIndex]} type={icons[currentIconIndex]} />
      </StyledLoadingContaier>
    </StyledBackground>
  );
};
