import { useEffect, useRef, useState } from 'react';
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
import { Canvas, CanvasRef } from '../../components/Canvas/Canvas';
import { CommonModal } from '../../components/Modal/CommonModal';
import { useSetModalType } from '../../hook/useSetModalType';

import Sunny from '../../assets/weathers/Sunny.png';
import Cloud from '../../assets/weathers/Cloud.png';
import Moon from '../../assets/weathers/Moon.png';
import Rainbow from '../../assets/weathers/Rainbow.png';
import Rainy from '../../assets/weathers/Rainy.png';
import Snow from '../../assets/weathers/Snow.png';

import CompleteBtn from '../../assets/buttons/DoneBtn.svg';
import { ToolBar } from '../../components/ToolBar/ToolBar';
import { PostImg2Img } from '../../apis/img2img';
import { postDiary } from '../../apis/postDiary';
import { useRecoilState } from 'recoil';
import { ImageUrlState } from '../../recoil/ImageUrl';
import { SelectDiaryBookState } from '../../recoil/SelectDiaryBookState';
import { useNavigate, useParams } from 'react-router-dom';
import { postPrompt } from '../..//apis/postPrompt';
import { postImage } from '../../apis/postImage';
import { PostTxt2Img } from '../../apis/postTxt2Img';

export const Drawing = () => {
  const { diarybookid } = useParams();
  const today = new Date();
  const canvasRef = useRef<CanvasRef | null>(null);
  const [inputYearValue, handleInputYearChange] = useFormInput(`${today.getFullYear()}`);
  const [inputMonthValue, handleInputMonthChange] = useFormInput(`${today.getMonth() + 1}`);
  const [inputDayValue, handleInputDayChange] = useFormInput(`${today.getDate()}`);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSelectedWeather, setIsSelectedWeather] = useState<string | null>('');
  const [isPen, setIsPen] = useState(true);
  const [imageURL, setImageURL] = useRecoilState<string>(ImageUrlState);
  const [diaryContent, setDiaryContent] = useState('');
  const [diaryBookState, setDiaryBookState] = useRecoilState(SelectDiaryBookState);
  const setModalType = useSetModalType();
  const navigate = useNavigate();

  const paddedMonth = inputMonthValue.padStart(2, '0');
  const paddedDay = inputDayValue.padStart(2, '0');

  const handleClearCanvas = () => {
    if (canvasRef.current && canvasRef.current.handleClearCanvas) {
      canvasRef.current.handleClearCanvas();
    }
  };

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

  const handlePenMode = () => {
    setIsPen((prev) => !prev);
  };

  const dataURLtoBlob = (dataurl: string) => {
    var arr = dataurl.split(',');
    if (arr.length < 2) {
      throw new Error('Invalid data URL');
    }
    var mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch || mimeMatch.length < 2) {
      throw new Error('Invalid data URL');
    }
    var mime = mimeMatch[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: 'image/png' });
  };

  // const dataURLtoFile = (dataurl: string, fileName: string) => {
  //   var arr = dataurl.split(',');
  //   if (arr.length < 2) {
  //     throw new Error('Invalid data URL');
  //   }
  //   var mimeMatch = arr[0].match(/:(.*?);/);
  //   if (!mimeMatch || mimeMatch.length < 2) {
  //     throw new Error('Invalid data URL');
  //   }
  //   var mime = mimeMatch[1];
  //   var bstr = atob(arr[1]);
  //   var n = bstr.length;
  //   var u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   return new File([u8arr], fileName, { type: 'image/png' });
  // };

  const handlePostImg2Img = async () => {
    try {
      const diaryId = await postDiary(diarybookid, {
        date: `${inputYearValue}-${paddedMonth}-${paddedDay}`,
        weather: isSelectedWeather || '',
        content: diaryContent,
      });

      let fullDataURL = '';
      let fileName = '';

      const prompt = await postPrompt(diaryContent);
      console.log(prompt);

      // 캔버스에 그림이 있는지 확인
      if (canvasRef.current && canvasRef.current.isEmpty()) {
        console.log('?');
        // 캔버스에 그림이 없으면 텍스트를 그림으로 변환하여 API 호출
        const response = await PostTxt2Img({ prompt });
        console.log(response);
        fullDataURL = 'data:image/png;base64,' + response;
        const currentTime = new Date();
        fileName = `image_${currentTime.getTime()}.png`;

        const blob = dataURLtoBlob(fullDataURL);

        const formData = new FormData();
        formData.append('file', blob, fileName);

        const ImageResponse = await postImage(diarybookid, diaryId, formData);
        console.log(ImageResponse);
        navigate(`/diary/${diarybookid}/${ImageResponse}`);
      } else {
        // 캔버스에 그림이 있으면 img2img API 호출
        console.log('??');
        const response = await PostImg2Img({ init_images: [imageURL], prompt });
        const encodingString = response.replace(/^"|"$/g, '');
        fullDataURL = 'data:image/png;base64,' + response;
        const currentTime = new Date();
        fileName = `image_${currentTime.getTime()}.png`;

        const blob = dataURLtoBlob(fullDataURL);

        const formData = new FormData();
        formData.append('file', blob, fileName);

        const ImageResponse = await postImage(diarybookid, diaryId, formData);
        console.log(ImageResponse);
        navigate(`/diary/${diarybookid}/${ImageResponse}`);
      }
    } catch (error) {
      console.error('HandlePostImg2Img error:', error);
    }
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
        <Canvas ref={canvasRef} isPen={isPen} />
        <StyledInputDiary
          cols={70}
          rows={100}
          wrap="hard"
          maxLength={100}
          value={diaryContent}
          onChange={(e) => setDiaryContent(e.target.value)}
        />
        <ToolBar onSelectMode={handlePenMode} isPen={isPen} onClearCanvas={handleClearCanvas} />
      </StyledDrawingContainer>
      {modalOpen && <CommonModal onSelectWeather={handleSelectWeather} />}
      <StyledSelectBtn src={CompleteBtn} onClick={handlePostImg2Img} />
    </StyledContainer>
  );
};
