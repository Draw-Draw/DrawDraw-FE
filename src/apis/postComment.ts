import { client } from './client';
import { CommentType } from '../types/Comment.type';

export const postDiary = async (diaryId: string, { stampType, content }: CommentType) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await client.post(
    `/api/v1/comments/diaries/${diaryId}`,
    {
      stampType,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  console.log(response.data.data);
  return response.data.data;
};
