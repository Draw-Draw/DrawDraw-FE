import { atom } from 'recoil';
import { persistAtom } from './persistAtom';

export const PostDiaryState = atom({
  key: 'PostDiaryState',
  default: {
    coverType: '1',
    diaryName: '',
    group: '',
    owner: '',
    open: true,
  },
  effects_UNSTABLE: [persistAtom],
});
