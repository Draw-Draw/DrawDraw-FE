import { useState } from 'react';
import { useRecoilState } from 'recoil';
import PINK from '../../../../assets/Cover/PINK.svg';
import YELLOW from '../../../../assets/Cover/ORANGE.svg';
import GREEN from '../../../../assets/Cover/GREEN.svg';
import BLUE from '../../../../assets/Cover/BLUE.svg';
import PURPLE from '../../../../assets/Cover/PURPLE.svg';
import { StyledContainer } from './Carousel.style';
import { Slider } from './Slider';
import { PostDiaryState } from '../../../../recoil/PostDiaryState';
import { DiaryBookType } from '../../../../types/DiaryBook.type';

export interface SliderProps {
  id: number;
  src: string;
}

export interface CarouselProps {
  onSelectCover: (coverType: string) => void;
}

export const Carousel = () => {
  const [postDiaryState, setPostDiaryState] = useRecoilState(PostDiaryState);

  const slider = [
    { id: 1, type: 'PINK', src: `${PINK}` },
    { id: 2, type: 'YELLOW', src: `${YELLOW}` },
    { id: 3, type: 'GREEN', src: `${GREEN}` },
    { id: 4, type: 'BLUE', src: `${BLUE}` },
    { id: 5, type: 'PURPLE', src: `${PURPLE}` },
    { id: 6, type: 'PURPLE', src: `${PURPLE}` },
  ];

  const [currentSlide, setCurrentSlide] = useState(1); // 처음에 마지막 슬라이드로 설정
  const total = slider.length;

  const goNext = () => {
    const nextSlide = currentSlide === total - 1 ? 0 : currentSlide + 1; // 다음 슬라이드로 이동
    setCurrentSlide(nextSlide);
    updatePostDiaryState(slider[nextSlide - 1].type);
  };

  const goPrev = () => {
    const prevSlide = currentSlide === 0 ? total - 1 : currentSlide - 1; // 이전 슬라이드 인덱스 계산
    setCurrentSlide(prevSlide); // 이전 슬라이드로 이동
    updatePostDiaryState(slider[prevSlide - 1].type);
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

  const updatePostDiaryState = (type: string) => {
    setPostDiaryState((prev: DiaryBookType) => ({
      ...prev,
      coverType: type,
    }));
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
            onUpdate={() => updatePostDiaryState(val.type)}
          />
        );
      })}
    </StyledContainer>
  );
};
