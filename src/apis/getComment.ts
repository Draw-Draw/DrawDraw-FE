import { client } from './client';

export const getComment = async (diaryId: string | undefined) => {
  const response = await client.get(`/api/v1/comments/diaries/${diaryId}`);

  console.log(response.data.data);
  return response.data.data;
};
