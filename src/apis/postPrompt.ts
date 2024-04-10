import { client } from './client';

export const postPrompt = async (contents: string) => {
  try {
    const response = await client.post(`/api/v1/diaries/prompt`, {
      contents,
    });
    return response.data.data.prompt;
  } catch (error) {
    throw new Error('Failed to post diary: ' + error);
  }
};
