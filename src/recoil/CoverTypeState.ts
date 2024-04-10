import { atom } from 'recoil';
import { persistAtom } from './persistAtom';

export const CoverTypeState = atom({
  key: 'CoverTypeState',
  default: {
    coverType: '1',
  },
  effects_UNSTABLE: [persistAtom],
});
