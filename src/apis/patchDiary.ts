import { ResultDiaryType } from '../types/ResultDiary.type';
import { client } from './client';

export const patchDiary = async (
  diaryBookId: string,
  diaryId: string,
  { weather, content }: ResultDiaryType
) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await client.patch(
    `/api/v1/diaries/diary-book/${diaryBookId}/diary/${diaryId}`,
    {
      weather,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  console.log(response.data);
  return response.data.data;
};
