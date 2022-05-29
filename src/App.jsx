import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import './App.css';

const App = () => {
	const canvi = () => {
		// Create new fabric canvas object
		const canvi = new fabric.Canvas('canvas', {
			height: 700,
			width: 1200,
		})
		// Add the rectangle object to the canvas
		canvi.add(rectRef.current);
		return canvi;
	}
	// Store canvas state
	const [canvas, setCanvas] = useState(null);
	// Create a ref to hold the rectangle object
	const rectRef = useRef(new fabric.Rect({
		fill: 'red',
		width: 100,
		height: 100,
		left: 300,
		top: 300,
		hasControls: false,
	}));
	// Update the canvas on mount
	useEffect(() => {
		setCanvas(canvi);
	}, []);
	// If the rectangle is moving, update the coords
	rectRef.current.on('moving', (e) => {
		setCoords([rectRef.current.left, rectRef.current.top]);
	});

	// Is the rectangle selected?
	const [isSelected, setIsSelected] = useState(false);
	rectRef.current.onSelect = () => {
		setIsSelected(true);
	}
	rectRef.current.onDeselect = () => {
		setIsSelected(false);
	}
	// Store the rectangle coords
	const [coords, setCoords] = useState([rectRef.current.left, rectRef.current.top]);

	return (
		<div>
			<div id='details'>
				fabric-canvas works!
				<p>x-axis position: {coords[0]}</p>
				<p>y-axis position: {coords[1]}</p>
				<p>Shape selected: {isSelected?'true':'false'}</p>
			</div>
			<canvas id="canvas" />
		</div>
	)
}
export default App;