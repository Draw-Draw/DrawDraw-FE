import { client } from './client';
import { DiaryType } from '../types/Diary.type';

export const postDiary = async (
  diaryBookId: string | undefined,
  { date, weather, content }: DiaryType
) => {
  const response = await client.post(`/api/v1/diaries/diary-book/${diaryBookId}`, {
    date,
    weather,
    content,
  });

  console.log(response.data.data.diaryId);
  return response.data.data.diaryId;
};
