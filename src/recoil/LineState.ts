import { atom } from 'recoil';
import { persistAtom } from './persistAtom';

export interface LineStateProps {
  width: number;
  color: string;
}

export const LineState = atom<LineStateProps>({
  key: 'lineState',
  default: {
    width: 50,
    color: '#672909',
  },
  effects_UNSTABLE: [persistAtom],
});
