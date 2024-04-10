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

interface HeaderProps {
  isDrawing: boolean;
  isTotal?: boolean;
}

export const Header = ({ isDrawing, isTotal }: HeaderProps) => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoDrawing = () => {
    navigate('/drawing/:diarybookid');
  };

  const handleGoNewDiary = () => {
    navigate('/register');
  };

  const handleClickedHamburger = () => {
    setIsHamburgerClicked((prev) => !prev);
  };

  const handleGoMy = () => {
    navigate('/my/1');
  };

  return (
    <StyledContainer $isTotal={isTotal}>
      {!isTotal && <StyledLogo src={Logo} onClick={handleGoHome} />}
      <StyledBoxBtnContainer>
        {!isDrawing && !isTotal && <StyledBoxBtn src={DrawBoxBtn} onClick={handleGoDrawing} />}
        {isHamburgerClicked ? (
          <>
            <StyledBoxBtn src={XBtn} onClick={handleClickedHamburger} />
            <StyledMenuDropDown $isDrawing={isDrawing} $isTotal={isTotal}>
              <StyledTextBox>
                <StyledText onClick={handleGoMy}>내 일기장</StyledText>
                <StyledText onClick={handleGoNewDiary}>새 일기장</StyledText>
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
