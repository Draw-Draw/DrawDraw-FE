import { useNavigate } from 'react-router-dom';
import { Carousel } from '../common/Button/Carousel/Carousel';
import { StyledSelectBtn, StyledTitle } from './SelectCover.style';
import SelectBtn from '../../assets/buttons/SelectBtn.svg';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { CoverTypeState } from '../../recoil/CoverTypeState';

export const SelectCover = () => {
  const navigate = useNavigate();
  const [coverType, setCoverType] = useRecoilState(CoverTypeState);

  const goCoverWrite = () => {
    navigate(`write`);
  };

  return (
    <>
      <StyledTitle>일기장의 표지를 선택해보자!</StyledTitle>
      <Carousel />
      <StyledSelectBtn src={SelectBtn} onClick={goCoverWrite} />
    </>
  );
};
