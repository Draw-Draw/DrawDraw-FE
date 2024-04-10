import { client } from './client';

export const getBoard = async () => {
  const response = await client.post(`/api/v1/boards`);

  return response.data;
};
