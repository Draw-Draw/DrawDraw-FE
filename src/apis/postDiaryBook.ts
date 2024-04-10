import { client } from './client';
import { DiaryBookType } from '../types/DiaryBook.type';

export const postDiaryBook = async ({
  coverType,
  diaryName,
  group,
  owner,
  open,
}: DiaryBookType) => {
  const response = await client.post('/api/v1/diary-books', {
    coverType,
    diaryName,
    group,
    owner,
    open,
  });

  return response.data.data.diaryBookId;
};
