import { useEffect, useState } from 'react';
import {
  StyledContainer,
  StyledDayContainer,
  StyledHeader,
  StyledIcon,
  StyledImg,
  StyledLine,
  StyledLogo,
  StyledMobileContainer,
  StyledStamp,
  StyledText,
} from './MobileView.style';
import { useParams } from 'react-router-dom';
import { getDiary } from '../../apis/getDiary';
import { ResultDiaryType } from '../../types/ResultDiary.type';

import Sunny from '../../assets/weathers/Sunny.png';
import Cloud from '../../assets/weathers/Cloud.png';
import Moon from '../../assets/weathers/Moon.png';
import Rainbow from '../../assets/weathers/Rainbow.png';
import Rainy from '../../assets/weathers/Rainy.png';
import Snow from '../../assets/weathers/Snow.png';
import Stamp from '../../assets/Stamps/GoodStamp.png';
import Logo from '../../assets/Logo.png';
import { getToken } from '../../apis/getToken';

export const MobileView = () => {
  const { diarybookid, diaryid } = useParams<{
    diarybookid: string | undefined;
    diaryid: string | undefined;
  }>();
  const [diaryData, setDiaryData] = useState<ResultDiaryType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getToken();
    setIsLoading(true);
    if (diarybookid && diaryid) {
      const fetchDiary = async () => {
        try {
          const data = await getDiary(diarybookid, diaryid);
          setDiaryData(data);
          window.location.reload();
        } catch (error) {
          console.error('Error fetching diary:', error);
        }
      };
      fetchDiary();
    }
  }, [diarybookid, diaryid]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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

  return (
    <>
      {isLoading ? (
        <div>로딩 중입니다...</div>
      ) : (
        <StyledContainer>
          {diaryData && (
            <StyledMobileContainer>
              <StyledHeader>
                <div>
                  {year}. {String(month).padStart(2, '0')}. {String(day).padStart(2, '0')}
                </div>
                <StyledLine />
                <StyledDayContainer>
                  {diaryData?.weather &&
                    (diaryData?.weather === 'SUNNY' ? (
                      <div>해가 쨍쨍</div>
                    ) : diaryData?.weather === 'CLOUDY' ? (
                      <div>구름이 많아요</div>
                    ) : diaryData?.weather === 'MOON' ? (
                      <div>별이 빛나는 밤에</div>
                    ) : diaryData?.weather === 'RAINBOW' ? (
                      <div>일곱빛깔 무지개</div>
                    ) : diaryData?.weather === 'RAINY' ? (
                      <div>비가 주륵주륵</div>
                    ) : (
                      <div>눈이 펑펑</div>
                    ))}
                  {diaryData?.weather && (
                    <StyledIcon
                      type={diaryData?.weather}
                      src={
                        diaryData?.weather === 'SUNNY'
                          ? Sunny
                          : diaryData?.weather === 'CLOUDY'
                            ? Cloud
                            : diaryData?.weather === 'MOON'
                              ? Moon
                              : diaryData?.weather === 'RAINBOW'
                                ? Rainbow
                                : diaryData?.weather === 'RAINY'
                                  ? Rainy
                                  : Snow
                      }
                    />
                  )}
                </StyledDayContainer>
              </StyledHeader>
              <StyledImg src={diaryData?.imageUrl} />
              <StyledText>{diaryData?.content}</StyledText>
              <StyledLogo src={Logo} />
              <StyledStamp src={Stamp} />
            </StyledMobileContainer>
          )}
        </StyledContainer>
      )}
    </>
  );
};
