import { useEffect, useState } from 'react';
import { CommonModal } from '../Modal/CommonModal';
import {
  StyledBookMarked,
  StyledBookMarkedContainer,
  StyledContainer,
  StyledDaySelectContainer,
  StyledDiaryDayText,
  StyledDiaryText,
  StyledDiaryWeatherSelectText,
  StyledDiaryWeatherText,
  StyledDrawingBook,
  StyledDrawingContainer,
  StyledIcon,
  StyledImage,
  StyledInputDiary,
} from './MyDetailDiary.style';
import DrawingBook from '../../assets/DrawingEmptySketchBook.png';
import PutBookMark from '../../assets/bookmarks/PutBookMark.svg';
import ShareBookMark from '../../assets/bookmarks/ShareBookMark.svg';
import CommentBookMark from '../../assets/bookmarks/CommentBookMark.svg';
import { useSetModalType } from '../../hook/useSetModalType';
import { ResultDiaryType } from '../../types/ResultDiary.type';

import Sunny from '../../assets/weathers/Sunny.png';
import Cloud from '../../assets/weathers/Cloud.png';
import Moon from '../../assets/weathers/Moon.png';
import Rainbow from '../../assets/weathers/Rainbow.png';
import Rainy from '../../assets/weathers/Rainy.png';
import Snow from '../../assets/weathers/Snow.png';
import { useNavigate } from 'react-router-dom';

interface MineDetailDiaryProps {
  diarybookId: string | undefined;
  diaryId?: string | undefined;
  isData: ResultDiaryType;
  onSelectMode?: () => void;
}

export const MyDetailDiary = ({
  diarybookId,
  diaryId,
  isData,
  onSelectMode,
}: MineDetailDiaryProps) => {
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const setModalType = useSetModalType();
  const navigate = useNavigate();

  const dateString = isData.date;

  let year: number | undefined;
  let month: number | undefined;
  let day: number | undefined;

  if (dateString) {
    const [yearStr, monthStr, dayStr] = dateString.split('-');
    year = parseInt(yearStr, 10);
    month = parseInt(monthStr, 10);
    day = parseInt(dayStr, 10);
  }

  console.log(`년: ${year}, 월: ${month}, 일: ${day}`);

  useEffect(() => {
    setIsOpenShareModal(false);
    setModalType('SHARE');
  }, []);

  const handleGoEdit = () => {
    navigate(`/diary/${diarybookId}/${isData.diaryId}/edit`);
  };

  const handleShareOpenModal = () => {
    setIsOpenShareModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenShareModal(false);
  };

  return (
    <StyledContainer>
      <StyledDrawingContainer>
        <StyledDrawingBook src={DrawingBook} />
        <StyledDiaryText $isInputText={false}>날짜</StyledDiaryText>
        <StyledDiaryDayText>
          {year}년 {month}월 {day}일
        </StyledDiaryDayText>
        <StyledDiaryWeatherText>날씨</StyledDiaryWeatherText>
        <StyledDaySelectContainer>
          {isData.weather && (
            <StyledIcon
              type={isData.weather}
              src={
                isData.weather === 'SUNNY'
                  ? Sunny
                  : isData.weather === 'CLOUDY'
                    ? Cloud
                    : isData.weather === 'MOON'
                      ? Moon
                      : isData.weather === 'RAINBOW'
                        ? Rainbow
                        : isData.weather === 'RAINY'
                          ? Rainy
                          : Snow
              }
            />
          )}
          {isData.weather &&
            (isData.weather === 'SUNNY' ? (
              <StyledDiaryWeatherSelectText>해가 쨍쨍</StyledDiaryWeatherSelectText>
            ) : isData.weather === 'CLOUDY' ? (
              <StyledDiaryWeatherSelectText>구름이 많아요</StyledDiaryWeatherSelectText>
            ) : isData.weather === 'MOON' ? (
              <StyledDiaryWeatherSelectText>별이 빛나는 밤에</StyledDiaryWeatherSelectText>
            ) : isData.weather === 'RAINBOW' ? (
              <StyledDiaryWeatherSelectText>일곱빛깔 무지개</StyledDiaryWeatherSelectText>
            ) : isData.weather === 'RAINY' ? (
              <StyledDiaryWeatherSelectText>비가 주륵주륵</StyledDiaryWeatherSelectText>
            ) : (
              <StyledDiaryWeatherSelectText>눈이 펑펑</StyledDiaryWeatherSelectText>
            ))}
        </StyledDaySelectContainer>
        <StyledImage src={isData.imageUrl} />
        <StyledInputDiary>{isData.content}</StyledInputDiary>
        <StyledBookMarkedContainer>
          <StyledBookMarked src={PutBookMark} onClick={handleGoEdit} />
          <StyledBookMarked src={ShareBookMark} onClick={handleShareOpenModal} />
          <StyledBookMarked src={CommentBookMark} onClick={onSelectMode} />
        </StyledBookMarkedContainer>
      </StyledDrawingContainer>
      {isOpenShareModal && (
        <CommonModal
          diarybookId={diarybookId}
          diaryId={diaryId}
          onCloseModal={() => handleCloseModal()}
        />
      )}
    </StyledContainer>
  );
};
