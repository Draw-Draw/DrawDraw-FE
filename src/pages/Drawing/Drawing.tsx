import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import {
  StyledContainer,
  StyledDaySelect,
  StyledDaySelectContainer,
  StyledDrawingBook,
  StyledDrawingContainer,
  StyledDrawingDayText,
  StyledDrawingInput,
  StyledDrawingInputContainer,
  StyledDrawingText,
  StyledIcon,
  StyledInputDiary,
  StyledSelectBtn,
} from './Drawing.style';
import DrawingBook from '../../assets/DrawingEmptySketchBook.png';
import { useFormInput } from '../../hook/useFormInput';
import { Canvas } from '../../components/Canvas/Canvas';
import { CommonModal } from '../../components/Modal/CommonModal';
import { useSetModalType } from '../../hook/useSetModalType';

import Sunny from '../../assets/weathers/Sunny.png';
import Cloud from '../../assets/weathers/Cloud.png';
import Moon from '../../assets/weathers/Moon.png';
import Rainbow from '../../assets/weathers/Rainbow.png';
import Rainy from '../../assets/weathers/Rainy.png';
import Snow from '../../assets/weathers/Snow.png';

import CompleteBtn from '../../assets/buttons/DoneBtn.svg';

export const Drawing = () => {
  const [inputYearValue, handleInputYearChange] = useFormInput('');
  const [inputMonthValue, handleInputMonthChange] = useFormInput('');
  const [inputDayValue, handleInputDayChange] = useFormInput('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isSelectedWeather, setIsSelectedWeather] = useState<string | null>('');
  const setModalType = useSetModalType();

  useEffect(() => {
    setModalOpen(false);
    setModalType('WEATHER');
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleSelectWeather = (weather: string) => {
    setIsSelectedWeather(weather);
    setModalOpen(false);
  };

  return (
    <StyledContainer>
      <Header isDrawing />
      <StyledDrawingContainer>
        <StyledDrawingBook src={DrawingBook} />
        <StyledDrawingText $isInputText={false} $isDay>
          날짜
        </StyledDrawingText>
        <StyledDrawingInputContainer>
          <StyledDrawingInput
            type="isyear"
            value={inputYearValue}
            onChange={handleInputYearChange}
          />
          <StyledDrawingText $isInputText>년</StyledDrawingText>
          <StyledDrawingInput
            type="ismonth"
            value={inputMonthValue}
            onChange={handleInputMonthChange}
          />
          <StyledDrawingText $isInputText>월</StyledDrawingText>
          <StyledDrawingInput type="isday" value={inputDayValue} onChange={handleInputDayChange} />
          <StyledDrawingText $isInputText>일</StyledDrawingText>
        </StyledDrawingInputContainer>
        <StyledDrawingText $isInputText={false} $isDay={false}>
          날씨
        </StyledDrawingText>
        {isSelectedWeather ? (
          <StyledDaySelectContainer onClick={handleOpenModal}>
            <StyledIcon
              type={isSelectedWeather}
              src={
                isSelectedWeather === 'Sunny'
                  ? Sunny
                  : isSelectedWeather === 'Cloud'
                    ? Cloud
                    : isSelectedWeather === 'Moon'
                      ? Moon
                      : isSelectedWeather === 'Rainbow'
                        ? Rainbow
                        : isSelectedWeather === 'Rainy'
                          ? Rainy
                          : isSelectedWeather === 'Snow'
                            ? Snow
                            : ''
              }
              alt={isSelectedWeather}
            />
            <StyledDrawingDayText $isInputText={false}>
              {isSelectedWeather === 'Sunny'
                ? '해가 쨍쨍'
                : isSelectedWeather === 'Cloud'
                  ? '구름 많아요'
                  : isSelectedWeather === 'Moon'
                    ? '별이 빛나는 밤에'
                    : isSelectedWeather === 'Rainbow'
                      ? '일곱 빛깔 무지개'
                      : isSelectedWeather === 'Rainy'
                        ? '비가 주륵주륵'
                        : isSelectedWeather === 'Snow'
                          ? '눈이 펑펑'
                          : ''}
            </StyledDrawingDayText>
          </StyledDaySelectContainer>
        ) : (
          <StyledDaySelect onClick={handleOpenModal}>날씨를 선택해주세요</StyledDaySelect>
        )}
        <Canvas />
        <StyledInputDiary cols={70} rows={100} wrap="hard" maxLength={100} />
      </StyledDrawingContainer>
      {modalOpen && <CommonModal onSelectWeather={handleSelectWeather} />}
      <StyledSelectBtn src={CompleteBtn} />
    </StyledContainer>
  );
};
