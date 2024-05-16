import SelectWidth from '../../assets/DrawIcons/Width.svg';
import Pen from '../../assets/DrawIcons/Pen.svg';
import Eraser from '../../assets/DrawIcons/Eraser.svg';
import Pallete from '../../assets/DrawIcons/Pallete.svg';
import Undo from '../../assets/DrawIcons/Undo.svg';
import Redo from '../../assets/DrawIcons/Redo.svg';
import Reset from '../../assets/DrawIcons/Delete.svg';
import Background from '../../assets/Tools/BigBackground.svg';
import SmallBackground from '../../assets/Tools/SmallBackground.svg';
import {
  StyledBackground,
  StyledBigCircle,
  StyledCircleContainer,
  StyledContainer,
  StyledIcon,
  StyledIconContainer,
  StyledInputColor,
  StyledRange,
  StyledRangeContainer,
  StyledSmallBackground,
  StyledSmallCircle,
} from './ToolBar.style';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { LineState, LineStateProps } from '../../recoil/LineState';

interface ToolBarProps {
  onSelectMode: () => void;
  onClearCanvas: () => void;
  onUndo: () => void;
  onRedo: () => void;
  isPen: boolean;
}

export const ToolBar = ({ onSelectMode, onClearCanvas, onUndo, onRedo, isPen }: ToolBarProps) => {
  const [line, setLine] = useRecoilState(LineState);
  const [isOpenWidth, setIsOpenWidth] = useState(true);
  const maxValue = 50;

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setLine((prevLine: LineStateProps) => ({
      ...prevLine,
      color: newColor,
    }));
  };

  const handleOpenSelectWidth = () => {
    setIsOpenWidth((prev) => !prev);
  };

  const handleChangeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(event.target.value, 10);
    setLine((prevLine: LineStateProps) => ({
      ...prevLine,
      width: newWidth,
    }));
  };

  return (
    <StyledContainer>
      <StyledBackground src={Background} />
      <StyledIconContainer>
        {isPen ? (
          <StyledIcon src={Pen} onClick={onSelectMode} />
        ) : (
          <StyledIcon src={Eraser} onClick={onSelectMode} />
        )}
        <StyledInputColor type="color" value={line.color} onChange={handleChangeColor} />
        <StyledIcon src={SelectWidth} onClick={handleOpenSelectWidth} />
        {isOpenWidth && (
          <StyledRangeContainer>
            <StyledRange
              type="range"
              min="3"
              max={maxValue.toString()}
              defaultValue={50}
              onChange={handleChangeWidth}
            />
            <StyledCircleContainer>
              <StyledBigCircle />
              <StyledSmallCircle />
            </StyledCircleContainer>
          </StyledRangeContainer>
        )}
        <StyledIcon src={Undo} onClick={onUndo} />
        <StyledIcon src={Redo} onClick={onRedo} />
        <StyledIcon src={Reset} onClick={onClearCanvas} />
      </StyledIconContainer>
    </StyledContainer>
  );
};
