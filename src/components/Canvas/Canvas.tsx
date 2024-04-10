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

  useImperativeHandle(ref, () => ({
    handleClearCanvas() {
      if (!getCtx || !canvasRef.current) return;
      getCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    },
    isEmpty: () => {
      const canvas = canvasRef.current;
      if (!canvas) return true; // 캔버스가 없으면 비어있는 것으로 간주
      const ctx = canvas.getContext('2d');
      if (!ctx) return true; // 캔버스의 컨텍스트가 없으면 비어있는 것으로 간주
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const isEmpty = Array.from(imageData.data).every((value) => value === 0);
      return isEmpty;
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 0.547;
      canvas.height = window.innerHeight * 0.47;
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

  const drawFn = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!getCtx) return;

    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (painting) {
      if (!isPen) {
        getCtx.clearRect(
          mouseX - getCtx.lineWidth / 2,
          mouseY - getCtx.lineWidth / 2,
          getCtx.lineWidth,
          getCtx.lineWidth
        );
        console.log('?');
      } else {
        getCtx.lineTo(mouseX, mouseY);
        getCtx.stroke();
      }
    } else {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    }
  };

  const handleClearCanvas = () => {
    if (!getCtx || !canvasRef.current) return;
    getCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsDrawing(false);
  };

  const handlePostSDImage = async () => {
    if (!canvasRef.current) return;

    const dataURL = canvasRef.current.toDataURL('image/png');
    const base64Image = dataURL.substring(dataURL.indexOf(',') + 1);
    setImageURL(base64Image);
    console.log(base64Image);
  };

  return (
    <>
      <StyledCanvas>
        <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => setPainting(false)}
          onMouseMove={(e) => drawFn(e)}
        />
      </StyledCanvas>
      {imageURL && <img src={imageURL} alt="" aria-hidden="true" />}
    </>
  );
});
