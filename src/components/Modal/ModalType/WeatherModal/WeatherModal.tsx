import { useState } from 'react';
import {
  StyledCloudIcon,
  StyledModalTextContainer,
  StyledMoonIcon,
  StyledRainbowIcon,
  StyledRainyIcon,
  StyledSnowIcon,
  StyledSunnyIcon,
  StyledTitleText,
  StyledWeatherGrid,
} from './WeatherModal.style';
import Sunny from '../../../../assets/weathers/Sunny.png';
import Cloud from '../../../../assets/weathers/Cloud.png';
import Moon from '../../../../assets/weathers/Moon.png';
import Rainbow from '../../../../assets/weathers/Rainbow.png';
import Rainy from '../../../../assets/weathers/Rainy.png';
import Snow from '../../../../assets/weathers/Snow.png';

interface Props {
  onSelectWeather?: (weather: string) => void;
}

export const WeatherModal = ({ onSelectWeather }: Props) => {
  const [, setSelectedWeather] = useState<string | null>(null);

  const handleWeatherClick = (weather: string) => {
    setSelectedWeather(weather);
    if (onSelectWeather) {
      onSelectWeather(weather);
    }
  };

  return (
    <StyledModalTextContainer>
      <StyledTitleText>오늘의 날씨는?</StyledTitleText>
      <StyledWeatherGrid>
        <StyledSunnyIcon src={Sunny} onClick={() => handleWeatherClick('SUNNY')} />
        <StyledCloudIcon src={Cloud} onClick={() => handleWeatherClick('CLOUDY')} />
        <StyledMoonIcon src={Moon} onClick={() => handleWeatherClick('MOON')} />
        <StyledRainbowIcon src={Rainbow} onClick={() => handleWeatherClick('RAINBOW')} />
        <StyledRainyIcon src={Rainy} onClick={() => handleWeatherClick('RAINY')} />
        <StyledSnowIcon src={Snow} onClick={() => handleWeatherClick('SNOWY')} />
      </StyledWeatherGrid>
    </StyledModalTextContainer>
  );
};
