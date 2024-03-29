import { NowSlider } from './Slider.style';

interface SliderProps {
  check: string;
  src: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Slider = ({ check, src, onPrev, onNext }: SliderProps) => {
  if (check !== 'hidden') {
    if (check === 'prev') {
      return <NowSlider src={src} check={check} onClick={onPrev} />;
    }
    if (check === 'next') {
      return <NowSlider src={src} check={check} onClick={onNext} />;
    }
    if (check === 'now') {
      return <NowSlider src={src} check={check} />;
    }
  }
  return null;
};
