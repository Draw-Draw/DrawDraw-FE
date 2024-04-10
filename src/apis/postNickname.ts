import { client } from './client';

export const getNickname = async (name: string) => {
  try {
    const response = await client.post('/api/v1/members', { name });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
};
