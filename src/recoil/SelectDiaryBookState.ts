import { atom } from 'recoil';
import { persistAtom } from './persistAtom';

export const SelectDiaryBookState = atom({
  key: 'SelectDiaryBookState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
