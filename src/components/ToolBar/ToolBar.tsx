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
  StyledContainer,
  StyledIcon,
  StyledIconContainer,
  StyledInputColor,
  StyledRange,
  StyledSmallBackground,
} from './ToolBar.style';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { LineState, LineStateProps } from '../../recoil/LineState';

interface ToolBarProps {
  onSelectMode: () => void;
  onClearCanvas: () => void;
  isPen: boolean;
}

export const ToolBar = ({ onSelectMode, onClearCanvas, isPen }: ToolBarProps) => {
  const [line, setLine] = useRecoilState(LineState);
  const [isOpenWidth, setIsOpenWidth] = useState(true);
  const maxValue = 20;

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
          <StyledIcon src={Eraser} onClick={onSelectMode} />
        ) : (
          <StyledIcon src={Pen} onClick={onSelectMode} />
        )}
        {line.color !== '#672909' ? (
          <StyledInputColor type="color" value={line.color} onChange={handleChangeColor} />
        ) : (
          <>
            <StyledIcon
              src={Pallete}
              onClick={() => {
                const colorInput = document.querySelector(
                  'input[type="color"]'
                ) as HTMLInputElement;
                if (colorInput) {
                  colorInput.click();
                }
              }}
            />
            <StyledInputColor
              type="color"
              value={line.color}
              onChange={handleChangeColor}
              style={{ display: 'none' }}
            />
          </>
        )}
        <StyledIcon src={SelectWidth} onClick={handleOpenSelectWidth} />
        {isOpenWidth && (
          <StyledRange
            type="range"
            min="1"
            max={maxValue.toString()}
            defaultValue={line.width.toString()}
            onChange={handleChangeWidth}
          />
        )}
        <StyledIcon src={Undo} />
        <StyledIcon src={Redo} />
        <StyledIcon src={Reset} onClick={onClearCanvas} />
      </StyledIconContainer>
    </StyledContainer>
  );
};
