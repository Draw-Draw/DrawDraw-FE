import { client } from './client';

export const getBoard = async () => {
  const response = await client.get(`/api/v1/boards`);

  return response.data.data.diaryMainViewResponses;
};
