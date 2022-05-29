import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import './App.css';

const App = () => {
	const canvi = () => {
		const canvi = new fabric.Canvas('canvas', {
			height: 700,
			width: 1200,
		})
		canvi.add(rectRef.current);
		return canvi;
	}
	const [canvas, setCanvas] = useState(null);
	const rectRef = useRef(new fabric.Rect({
		fill: 'red',
		width: 100,
		height: 100,
		left: 300,
		top: 300,
		hasControls: false,
	}));
	useEffect(() => {
		setCanvas(canvi);
	}, []);
	
	rectRef.current.on('moving', (e) => {
		setCoords([rectRef.current.left, rectRef.current.top]);
	});

	const [isSelected, setIsSelected] = useState(false);
	rectRef.current.onSelect = () => {
		setIsSelected(true);
	}
	rectRef.current.onDeselect = () => {
		setIsSelected(false);
	}
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