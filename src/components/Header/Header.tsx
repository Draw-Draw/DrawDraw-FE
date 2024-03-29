import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import DrawBoxBtn from '../../assets/DrawBoxBtn.svg';
import HamburgerBtn from '../../assets/HamburgerBtn.svg';
import XBtn from '../../assets/XBoxBtn.svg';
import {
  StyledBoxBtn,
  StyledBoxBtnContainer,
  StyledContainer,
  StyledLogo,
  StyledMenuDropDown,
  StyledText,
  StyledTextBox,
} from './Header.style';

export const Header = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const navigate = useNavigate();

  const handleGoDrawing = () => {
    navigate('/drawing');
  };
  const handleClickedHamburger = () => {
    setIsHamburgerClicked((prev) => !prev);
  };

  return (
    <StyledContainer>
      <StyledLogo src={Logo} />
      <StyledBoxBtnContainer>
        <StyledBoxBtn src={DrawBoxBtn} onClick={handleGoDrawing} />
        {isHamburgerClicked ? (
          <>
            <StyledBoxBtn src={XBtn} onClick={handleClickedHamburger} />
            <StyledMenuDropDown>
              <StyledTextBox>
                <StyledText>내 일기장</StyledText>
                <StyledText>친구 목록</StyledText>
                <StyledText>로그아웃</StyledText>
              </StyledTextBox>
            </StyledMenuDropDown>
          </>
        ) : (
          <StyledBoxBtn src={HamburgerBtn} onClick={handleClickedHamburger} />
        )}
      </StyledBoxBtnContainer>
    </StyledContainer>
  );
};
