'use client';
import React, { useEffect, useRef, useState } from 'react';

const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return; // 确保 canvas 已挂载

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // 确保 context 存在

    const WIDTH = 700;
    const HEIGHT = 500;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fill();

    const imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
    const pix = imgData.data;

    const flickering = () => {
      for (let i = 0; i < pix.length; i += 4) {
        const color = Math.random() * 255 + 50;
        pix[i] = color;
        pix[i + 1] = color;
        pix[i + 2] = color;
      }
      ctx.putImageData(imgData, 0, 0);
      setStartAnimation(true);
    };

    const flickerInterval = window.setInterval(flickering, 30);

    // 清理定时器
    return () => {
      clearInterval(flickerInterval);
    };
  }, []);
  return (
    <>
      <h1
        className={`z-30 absolute left-1/2 top-1/2 mt-[-100px] ml-[-50%] w-full h-[200px] text-[200px] leading-[200px] font-bold text-center text-transparent ${startAnimation ? 'animate-asdd' : ''}`}
      >
        404
      </h1>
      <div className="overflow-hidden frame z-20 absolute left-0 top-0 w-full h-full from-transparent to-black">
        <div
          className={`absolute left-0 top-[-20%] w-full h-[20%] bg-black opacity-[0.12] shadow-[0_0_10px_rgba(0,0,0,.3)] ${startAnimation ? 'animate-asd' : ''}`}
        ></div>
      </div>
      <canvas className="z-10 absolute left-0 top-0 w-full h-full" id="canvas" ref={canvasRef}></canvas>
    </>
  );
};
export default NotFound;
