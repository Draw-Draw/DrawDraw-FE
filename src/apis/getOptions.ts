import { client } from './client';

export const getOptions = async () => {
  const response = await client.get(`http://127.0.0.1:7860/sdapi/v1/options`);

  console.log(response)
  return response;
};
