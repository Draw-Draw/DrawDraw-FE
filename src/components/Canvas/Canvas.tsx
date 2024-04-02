import React, { useEffect, useRef, useState } from 'react';
import { StyledCanvas } from './Canvas.style';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [getCtx, setGetCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [painting, setPainting] = useState<boolean>(false);
  const [getCanvas, setGetCanvas] = useState<HTMLCanvasElement | null>(null);

  const imageURL = getCanvas ? getCanvas.toDataURL() : '';

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
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#672909';
    setGetCtx(ctx);
    setGetCanvas(canvas);
  }, []);

  const drawFn = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!getCtx) return;

    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
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
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => setPainting(false)}
          onMouseMove={(e) => drawFn(e)}
          // onMouseLeave={() => setPainting(false)}
        />
      </StyledCanvas>
      {imageURL && <img src={imageURL} alt="" aria-hidden="true" />}
    </>
  );
};
