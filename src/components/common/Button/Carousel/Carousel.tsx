import { useState } from 'react';
import EmptySketchBook1 from '../../../../assets/EmptySketchBook1.png';
import EmptySketchBook2 from '../../../../assets/EmptySketchBook2.png';
import EmptySketchBook3 from '../../../../assets/EmptySketchBook3.png';
import EmptySketchBook4 from '../../../../assets/EmptySketchBook4.png';
import EmptySketchBook5 from '../../../../assets/EmptySketchBook5.png';
import EmptySketchBook6 from '../../../../assets/EmptySketchBook6.png';
import { StyledContainer } from './Carousel.style';
import { Slider } from './Slider';

export interface SliderProps {
  id: number;
  src: string;
}

export const Carousel = () => {
  const slider = [
    { id: 0, src: `${EmptySketchBook1}` },
    { id: 1, src: `${EmptySketchBook2}` },
    { id: 2, src: `${EmptySketchBook3}` },
    { id: 3, src: `${EmptySketchBook4}` },
    { id: 4, src: `${EmptySketchBook5}` },
    { id: 5, src: `${EmptySketchBook6}` },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // 처음에 마지막 슬라이드로 설정
  const total = slider.length;

  const goNext = () => {
    setCurrentSlide((val) => (val === total - 1 ? 0 : val + 1)); // 다음 슬라이드로 이동
  };

  const goPrev = () => {
    setCurrentSlide((val) => (val === 0 ? total - 1 : val - 1)); // 이전 슬라이드로 이동
  };

  const check = (id: number) => {
    const prevIndex = currentSlide === 0 ? total - 1 : currentSlide - 1;
    const nextIndex = currentSlide === total - 1 ? 0 : currentSlide + 1;

    if (id === prevIndex) {
      return 'prev';
    }
    if (id === nextIndex) {
      return 'next';
    }
    if (id === currentSlide) {
      return 'now';
    }
    return 'hidden';
  };

  return (
    <StyledContainer>
      {slider.map((val) => {
        return (
          <Slider
            key={val.id}
            check={check(val.id)}
            src={val.src}
            onPrev={goPrev}
            onNext={goNext}
          />
        );
      })}
    </StyledContainer>
  );
};
