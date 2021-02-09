import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [height,setHeight] = useState(window.innerHeight);
	const [width,setWidth] = useState(window.innerWidth);
	const updateHeightWidth = () => {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		console.log('UseEffect');
		window.addEventListener('resize',updateHeightWidth);
		return () => {
			console.log('Cleanup');
			window.removeEventListener('resize',updateHeightWidth);
		};
	});

	console.log('Rendered');
	return (
		<>
			<h3>Height : {height} Pixels</h3>
			<h3>Width : {width} Pixels</h3>
		</>
	);
};	

export default UseEffectCleanup;
