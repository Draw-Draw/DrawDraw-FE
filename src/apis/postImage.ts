import { client } from './client';

export const postImage = async (
  diaryBookId: string | undefined,
  diaryId: number,
  formData: FormData
) => {
  const response = await client.patch(
    `/api/v1/diaries/diary-book/${diaryBookId}/diary/${diaryId}/image`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  console.log(response.data.data.diaryId);
  return response.data.data.diaryId;
};
