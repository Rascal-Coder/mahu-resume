'use client';
import React, { useEffect, useRef } from 'react';

import './not-found.scss';
const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let WIDTH;
    let HEIGHT;
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext('2d');
    if (ctx === null) return;
    canvas.width = WIDTH = 700;
    canvas.height = HEIGHT = 500;
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
    };

    const flickerInterval = window.setInterval(flickering, 30);
    return () => {
      if (flickerInterval !== undefined) {
        clearInterval(flickerInterval);
      }
    };
  }, []);
  return (
    <div>
      <h1>404</h1>
      <div className="frame">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="caps"></div>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};
export default NotFound;
