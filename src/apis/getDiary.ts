import { client } from './client';

export const getDiary = async (diaryBookId: string, diaryId: string) => {
  const response = await client.get(`/api/v1/diaries/diary-book/${diaryBookId}/diary/${diaryId}`);

  console.log(response.data);
  return response.data.data;
};
