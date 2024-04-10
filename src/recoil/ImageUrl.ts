import { atom } from 'recoil';
import { persistAtom } from './persistAtom';

export const ImageUrlState = atom({
  key: 'ImageUrlState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
