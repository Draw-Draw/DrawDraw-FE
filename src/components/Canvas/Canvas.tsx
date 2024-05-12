import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
// import axios from 'axios';
import { StyledCanvas, StyledTestBtn } from './Canvas.style';
import { useRecoilState } from 'recoil';
import { LineState } from '../../recoil/LineState';
import { ImageUrlState } from '../../recoil/ImageUrl';

interface CanvasProps {
  isPen: boolean;
}

export interface CanvasRef {
  handleClearCanvas: () => void;
  isEmpty: () => boolean | undefined;
  handleUndo: () => void;
  handleRedo: () => void;
}

export const Canvas = forwardRef<CanvasRef, CanvasProps>((props, ref) => {
  const { isPen } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [painting, setPainting] = useState<boolean>(false);
  const [, setGetCanvas] = useState<HTMLCanvasElement | null>(null);
  const [imageURL, setImageURL] = useRecoilState<string>(ImageUrlState);
  const [line, setLine] = useRecoilState(LineState);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isResult] = useState<string>('');
  const [undoStack, setUndoStack] = useState<ImageData[]>([]);
  const [redoStack, setRedoStack] = useState<ImageData[]>([]);

  useImperativeHandle(
    ref,
    () => ({
      handleClearCanvas() {
        if (!getCtx || !canvasRef.current) return;
        getCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setUndoStack([]); // Undo 스택 초기화
        setRedoStack([]); // Redo 스택 초기화
      },
      isEmpty: () => {
        const canvas = canvasRef.current;
        if (!canvas) return true;
        const ctx = canvas.getContext('2d');
        if (!ctx) return true;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const isEmpty = Array.from(imageData.data).every((value) => value === 0);
        return isEmpty;
      },
      handleUndo() {
        console.log(undoStack);
        console.log(redoStack);
        if (undoStack.length === 0) return; // Undo 스택이 비어있으면 아무것도 하지 않음

        const lastAction = undoStack[undoStack.length - 1]; // Undo 스택에서 가장 최근에 저장된 그림 데이터를 가져옴
        if (lastAction) {
          setUndoStack((prevUndoStack) => prevUndoStack.slice(0, -1)); // Undo 스택에서 마지막 액션 제거
          setRedoStack([...redoStack, lastAction]);
          console.log(undoStack);
          console.log(redoStack);
        }
        // Redo 스택에 추가

        // Canvas에 Undo를 적용하기 위해 이전 그림 데이터를 가져와 다시 그림
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx && lastAction) {
            ctx.putImageData(lastAction, 0, 0);
            console.log(ctx.putImageData);
          }
        }
      },
      handleRedo() {
        console.log(undoStack);
        console.log(redoStack);
        if (redoStack.length === 0) return; // Redo 스택이 비어있으면 아무것도 하지 않음

        const lastAction = redoStack[redoStack.length - 1]; // Redo 스택에서 가장 최근에 저장된 그림 데이터를 가져옴
        if (lastAction) {
          setUndoStack([...undoStack, lastAction]);
          setRedoStack((prevRedoStack) => prevRedoStack.slice(0, -1));
        }
        console.log(undoStack);
        console.log(redoStack);
        // Undo 스택에 추가

        // Canvas에 Redo를 적용하기 위해 그림 데이터를 가져와 다시 그림
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx && lastAction) {
            ctx.putImageData(lastAction, 0, 0);
          }
        }
      },
    }),
    [undoStack, redoStack]
  );

  useEffect(() => {
    setLine((prevLine) => ({ ...prevLine, width: 50, color: '#672909' }));
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const maxHeight = 1599;
      const heightRatio = window.innerWidth <= maxHeight ? 0.38 : 0.47;
      canvas.width = window.innerWidth * 0.547;
      canvas.height = window.innerHeight * heightRatio;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineJoin = 'round';
    ctx.lineWidth = line.width;
    ctx.strokeStyle = line.color;
    setGetCtx(ctx);
    setGetCanvas(canvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineWidth = line.width;
    ctx.strokeStyle = line.color;
    const dataURL = canvasRef.current.toDataURL('image/png');
    const base64Image = dataURL.substring(dataURL.indexOf(',') + 1);
    setImageURL(base64Image);
    console.log(imageURL);
  }, [line]);

  const drawFn = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!getCtx || !canvasRef.current) return;

    let mouseX = 0;
    let mouseY = 0;

    if (
      e.type === 'mousemove' ||
      e.type === 'mousedown' ||
      e.type === 'mouseup' ||
      e.type === 'mouseleave'
    ) {
      mouseX = (e as React.MouseEvent<HTMLCanvasElement, MouseEvent>).nativeEvent.offsetX;
      mouseY = (e as React.MouseEvent<HTMLCanvasElement, MouseEvent>).nativeEvent.offsetY;
    } else if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend') {
      const touch = (e as React.TouchEvent<HTMLCanvasElement>).touches[0];
      if (touch) {
        const rect = canvasRef.current.getBoundingClientRect();
        mouseX = touch.clientX - rect.left;
        mouseY = touch.clientY - rect.top;
      }
    }

    if (painting) {
      if (!isPen) {
        getCtx.clearRect(
          mouseX - getCtx.lineWidth / 2,
          mouseY - getCtx.lineWidth / 2,
          getCtx.lineWidth,
          getCtx.lineWidth
        );
      } else {
        getCtx.lineTo(mouseX, mouseY);
        getCtx.stroke();
      }
    } else {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    }
  };

  const handleMouseDown = () => {
    if (!getCtx || !canvasRef.current) return;

    setPainting(true); // 마우스 클릭 상태를 true로 설정하여 그림 그리기 시작
    const imageData = getCtx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
    setUndoStack((prevStack) => [...prevStack, imageData]);
  };

  const handleMouseUp = () => {
    setPainting(false); // 마우스 클릭 상태를 false로 설정하여 그림 그리기 종료
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!getCtx || !canvasRef.current) return;

    const touch = e.touches[0];
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = touch.clientX - rect.left;
    const mouseY = touch.clientY - rect.top;

    setPainting(true);
    getCtx.beginPath();
    getCtx.moveTo(mouseX, mouseY);
    const imageData = getCtx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
    setUndoStack((prevStack) => [...prevStack, imageData]);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!getCtx || !canvasRef.current || !painting) return;

    const touch = e.touches[0];
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = touch.clientX - rect.left;
    const mouseY = touch.clientY - rect.top;

    if (!isPen) {
      getCtx.clearRect(
        mouseX - getCtx.lineWidth / 2,
        mouseY - getCtx.lineWidth / 2,
        getCtx.lineWidth,
        getCtx.lineWidth
      );
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.stroke();
    }
  };

  return (
    <>
      <StyledCanvas>
        <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => drawFn(e)}
          onMouseLeave={() => setPainting(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        />
      </StyledCanvas>
      {imageURL && <img src={imageURL} alt="" aria-hidden="true" />}
    </>
  );
});
