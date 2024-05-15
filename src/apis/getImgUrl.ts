import { client } from './client';

export const getImgUrl = async (imageurl: string | undefined) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await client.get(`/api/v1/diaries/base64?imageUrl=${imageurl}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data.data.base64Str;
};
