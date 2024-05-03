import { client } from './client';

export const getMemberBoard = async (memberId: string | undefined) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await client.get(`/api/v1/members/${memberId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(response.data.data.diaryBooks);
  return response.data.data.diaryBooks;
};
