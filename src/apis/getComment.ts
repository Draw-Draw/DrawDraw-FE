import { client } from './client';

export const getComment = async (diaryId: string | undefined) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await client.get(`/api/v1/comments/diaries/${diaryId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(response.data.data);
  return response.data.data;
};
