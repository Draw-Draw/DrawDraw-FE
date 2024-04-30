import { client } from './client';

export const getTotalDiary = async (diaryBookId: string | undefined) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await client.get(`/api/v1/diary-books/${diaryBookId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(response.data.data.diaries);
  return response.data.data.diaries;
};
