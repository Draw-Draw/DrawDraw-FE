import { useRecoilState } from 'recoil';
import { NowSlider } from './Slider.style';
import { PostDiaryState } from '../../../../recoil/PostDiaryState';
import { DiaryBookType } from '../../../../types/DiaryBook.type';

interface SliderProps {
  check: string;
  src: string;
  type: string;
  onPrev?: () => void;
  onNext?: () => void;
  onUpdate?: () => void;
}

export const Slider = ({ check, src, type, onPrev, onNext, onUpdate }: SliderProps) => {
  if (check !== 'hidden') {
    if (check === 'prev') {
      return <NowSlider src={src} check={check} onClick={onPrev} />;
    }
    if (check === 'next') {
      return <NowSlider src={src} check={check} onClick={onNext} />;
    }
    if (check === 'now') {
      return <NowSlider src={src} check={check} onClick={onUpdate} />;
    }
  }
  return null;
};
