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
}

export const Slider = ({ check, src, type, onPrev, onNext }: SliderProps) => {
  const [postDiaryState, setPostDiaryState] = useRecoilState(PostDiaryState);

  const handleCoverTypeSelection = () => {
    setPostDiaryState((prev: DiaryBookType) => ({
      ...prev,
      coverType: type,
    }));
  };

  if (check !== 'hidden') {
    if (check === 'prev') {
      return <NowSlider src={src} check={check} onClick={onPrev} />;
    }
    if (check === 'next') {
      return <NowSlider src={src} check={check} onClick={onNext} />;
    }
    if (check === 'now') {
      return <NowSlider src={src} check={check} onClick={handleCoverTypeSelection} />;
    }
  }
  return null;
};
