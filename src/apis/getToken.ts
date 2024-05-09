import { client } from './client';

export const getToken = async () => {
  const response = await client.get(`/api/v1/auth`);

  localStorage.setItem('accessToken', response.data.data.accessToken);
  return response.data.data.accessToken;
};
