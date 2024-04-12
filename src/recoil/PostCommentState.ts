import { atom } from 'recoil';
import { persistAtom } from './persistAtom';

export const PostCommentState = atom({
  key: 'PostCommentState',
  default: {
    content: '',
    stampType: '',
  },
  effects_UNSTABLE: [persistAtom],
});
