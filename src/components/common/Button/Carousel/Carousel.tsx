import { useState } from 'react';
import PINK from '../../../../assets/Cover/PINK.svg';
import ORANGE from '../../../../assets/Cover/ORANGE.svg';
import GREEN from '../../../../assets/Cover/GREEN.svg';
import BLUE from '../../../../assets/Cover/BLUE.svg';
import PURPLE from '../../../../assets/Cover/PURPLE.svg';
import { StyledContainer } from './Carousel.style';
import { Slider } from './Slider';

export interface SliderProps {
  id: number;
  src: string;
}

export interface CarouselProps {
  onSelectCover: (coverType: string) => void;
}

export const Carousel = () => {
  const slider = [
    { id: 1, type: 'PINK', src: `${PINK}` },
    { id: 2, type: 'ORANGE', src: `${ORANGE}` },
    { id: 3, type: 'GREEN', src: `${GREEN}` },
    { id: 4, type: 'BLUE', src: `${BLUE}` },
    { id: 5, type: 'PURPLE', src: `${PURPLE}` },
    { id: 6, type: 'PURPLE', src: `${PURPLE}` },
  ];

  const [currentSlide, setCurrentSlide] = useState(1); // 처음에 마지막 슬라이드로 설정
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
            type={val.type}
            src={val.src}
            onPrev={goPrev}
            onNext={goNext}
          />
        );
      })}
    </StyledContainer>
  );
};
