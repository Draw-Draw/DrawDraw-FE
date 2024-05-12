import { ResultDiaryType } from '../types/ResultDiary.type';
import { client } from './client';

export const patchDiary = async (
  diaryBookId: string,
  diaryId: string,
  { weather, content }: ResultDiaryType
) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
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
    alert('수정이 완료되었습니다.');
    return response.data.data;
  } catch (error) {
    console.error('Error updating diary:', error);
    throw error;
  }
};
