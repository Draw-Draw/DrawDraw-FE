import { client } from './client';

export const postLogout = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await client.post('/api/v1/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    return response.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
};
