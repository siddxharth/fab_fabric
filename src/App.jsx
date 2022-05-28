import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import './App.css';

const initCanvas = () => {
	const canvi = new fabric.Canvas('canvas', {
		height: window.innerHeight - 100,
		width: window.innerWidth - 100,
	});
	return (
		canvi
	)
}

const AddRect = (canvas, rectRef) => {
	canvas.add(rectRef.current);
}

const PrintCoords = (canvas, rectRef) => {
	var objects = canvas.getObjects();
	if (objects.length === 0) {
		console.log('No rectangle found');
	} else {
		objects = canvas.getObjects();
		rectRef.current = objects[0];
		var leftCord = rectRef.current.left;
		var topCord = rectRef.current.top;
		console.log(`(${rectRef.current.left}, ${rectRef.current.top})`);
		return (
			<div>
				{`${leftCord}, ${topCord}`}
			</div>
		)
	}
	return (
		<div>
			{`${leftCord}, ${topCord}`}
		</div>
	)
}


const App = () => {
	const rectRef = useRef(new fabric.Rect({
		left: 100,
		top: 100,
		fill: 'red',
		width: 100,
		height: 50,
		borderColor: 'black',
	})
	);
	useEffect(() => {
		setCanvas(initCanvas());
	}, []);

	const canvi = new fabric.Canvas('canvas', {
		height: window.innerHeight - 100,
		width: window.innerWidth - 100,
	});
	const [canvas, setCanvas] = useState(canvi);
	canvas.on('object:moving', (e) => {
		PrintCoords(canvas, rectRef);
		useRef.current = rectRef;
	});
	const [coord] = useState(PrintCoords(canvas, rectRef));
	return (
		<div>
			<h1>Canvas</h1>
			<button onClick={() => AddRect(canvas, rectRef)}>Add Rect</button>
			<button onClick={() => PrintCoords(canvas, rectRef)}>Print Coords</button>
			{coord}
			<canvas id="canvas" />
		</div>
	)
}

export default App;