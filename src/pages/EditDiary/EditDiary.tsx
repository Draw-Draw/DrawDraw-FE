import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import {
  StyledContainer,
  StyledDaySelect,
  StyledDaySelectContainer,
  StyledDrawingBook,
  StyledDrawingContainer,
  StyledDrawingDayText,
  StyledDrawingInputContainer,
  StyledDrawingText,
  StyledIcon,
  StyledImage,
  StyledInputDiary,
  StyledSelectBtn,
} from './EditDiary.style';
import DrawingBook from '../../assets/DrawingEmptySketchBook.png';
import { CommonModal } from '../../components/Modal/CommonModal';
import { useSetModalType } from '../../hook/useSetModalType';

import Sunny from '../../assets/weathers/Sunny.png';
import Cloud from '../../assets/weathers/Cloud.png';
import Moon from '../../assets/weathers/Moon.png';
import Rainbow from '../../assets/weathers/Rainbow.png';
import Rainy from '../../assets/weathers/Rainy.png';
import Snow from '../../assets/weathers/Snow.png';

import CompleteBtn from '../../assets/buttons/DoneBtn.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading/Loading';
import { ResultDiaryType } from '@/types/ResultDiary.type';
import { getDiary } from '../../apis/getDiary';
import { patchDiary } from '../../apis/patchDiary';

export const EditDiary = () => {
  const { diarybookid, diaryid } = useParams<{
    diarybookid: string | undefined;
    diaryid: string | undefined;
  }>();
  const [diaryData, setDiaryData] = useState<ResultDiaryType | null>(null);

  useEffect(() => {
    if (diarybookid && diaryid) {
      const fetchDiary = async () => {
        try {
          const data = await getDiary(diarybookid, diaryid);
          setDiaryData(data);
        } catch (error) {
          console.error('Error fetching diary:', error);
        }
      };
      fetchDiary();
    }
  }, [diarybookid, diaryid]);

  const dateString = diaryData?.date;

  let year: number | undefined;
  let month: number | undefined;
  let day: number | undefined;

  if (dateString) {
    const [yearStr, monthStr, dayStr] = dateString.split('-');
    year = parseInt(yearStr, 10);
    month = parseInt(monthStr, 10);
    day = parseInt(dayStr, 10);
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [isSelectedWeather, setIsSelectedWeather] = useState<string | undefined>(
    diaryData?.weather
  );
  const [diaryContent, setDiaryContent] = useState(diaryData?.content);
  const [isLoading, setIsLoading] = useState(false);
  const setModalType = useSetModalType();
  const navigate = useNavigate();

  useEffect(() => {
    setModalOpen(false);
    setModalType('WEATHER');
  }, []);

  useEffect(() => {
    setDiaryContent(diaryData?.content);
    setIsSelectedWeather(diaryData?.weather);
  }, [diaryData]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleSelectWeather = (weather: string) => {
    setIsSelectedWeather(weather);
    setModalOpen(false);
  };

  const handleDoneEdit = async () => {
    if (diarybookid && diaryid) {
      try {
        await patchDiary(diarybookid, diaryid, {
          weather: isSelectedWeather,
          content: diaryContent,
        });

        navigate(`/diary/${diarybookid}/${diaryid}`);
      } catch (error) {
        console.error('Error updating diary:', error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledContainer>
          <Header isDrawing />
          <StyledDrawingContainer>
            <StyledDrawingBook src={DrawingBook} />
            <StyledDrawingText $isInputText={false} $isDay>
              날짜
            </StyledDrawingText>
            <StyledDrawingInputContainer>
              <StyledDrawingText $isInputText>{year}년</StyledDrawingText>
              <StyledDrawingText $isInputText>{month}월</StyledDrawingText>
              <StyledDrawingText $isInputText>{day}일</StyledDrawingText>
            </StyledDrawingInputContainer>
            <StyledDrawingText $isInputText={false} $isDay={false}>
              날씨
            </StyledDrawingText>
            {isSelectedWeather ? (
              <StyledDaySelectContainer onClick={handleOpenModal}>
                <StyledIcon
                  type={isSelectedWeather}
                  src={
                    isSelectedWeather === 'SUNNY'
                      ? Sunny
                      : isSelectedWeather === 'CLOUDY'
                        ? Cloud
                        : isSelectedWeather === 'MOON'
                          ? Moon
                          : isSelectedWeather === 'RAINBOW'
                            ? Rainbow
                            : isSelectedWeather === 'RAINY'
                              ? Rainy
                              : isSelectedWeather === 'SNOWY'
                                ? Snow
                                : ''
                  }
                  alt={isSelectedWeather}
                />
                <StyledDrawingDayText $isInputText={false}>
                  {isSelectedWeather === 'SUNNY'
                    ? '해가 쨍쨍'
                    : isSelectedWeather === 'CLOUDY'
                      ? '구름 많아요'
                      : isSelectedWeather === 'MOON'
                        ? '별이 빛나는 밤에'
                        : isSelectedWeather === 'RAINBOW'
                          ? '일곱 빛깔 무지개'
                          : isSelectedWeather === 'RAINY'
                            ? '비가 주륵주륵'
                            : isSelectedWeather === 'SNOWY'
                              ? '눈이 펑펑'
                              : ''}
                </StyledDrawingDayText>
              </StyledDaySelectContainer>
            ) : (
              <StyledDaySelect onClick={handleOpenModal}>날씨를 선택해주세요</StyledDaySelect>
            )}
            <StyledImage src={diaryData?.imageUrl} />
            <StyledInputDiary
              cols={70}
              rows={100}
              wrap="hard"
              maxLength={100}
              value={diaryContent}
              onChange={(e) => setDiaryContent(e.target.value)}
            />
          </StyledDrawingContainer>
          {modalOpen && <CommonModal onSelectWeather={handleSelectWeather} />}
          <StyledSelectBtn src={CompleteBtn} onClick={handleDoneEdit} />
        </StyledContainer>
      )}
    </>
  );
};
