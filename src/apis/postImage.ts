import { client } from './client';

export const postImage = async (
  diaryBookId: string | undefined,
  diaryId: number,
  formData: FormData
) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await client.patch(
    `/api/v1/diaries/diary-book/${diaryBookId}/diary/${diaryId}/image`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  console.log(response.data.data.diaryId);
  return response.data.data.diaryId;
};
