import { client } from './client';

export const getExhibition = async () => {
  const response = await client.get(`/api/v1/boards/exhibition`);

  return response.data.data.diaryMainViewResponses;
};
