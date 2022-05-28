import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import './App.css';

const initCanvas = () => {
  const canvi = new fabric.Canvas('canvas', {
    height: window.innerHeight - 100,
    width: window.innerWidth - 100,
  });
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 100,
    height: 50,
    hasControls: false,
    borderColor: 'black',
  });
  canvi.add(rect);
  return (
    canvi
  )
}

const App = () => {
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const [canvas, setCanvas] = useState(null);
  return (
    <div>
      <h1>Canvas</h1>
      <canvas id="canvas" />
    </div>
  )
}

export default App;