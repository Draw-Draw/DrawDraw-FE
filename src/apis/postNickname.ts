import { client } from './client';

export const postNickname = async (name: string) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await client.post(
      '/api/v1/members',
      { name },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
};
