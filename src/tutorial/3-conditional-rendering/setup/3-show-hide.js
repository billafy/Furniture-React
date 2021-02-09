import React, { useState, useEffect } from "react";

const ShowHide = () => {
	const [show,setShow] = useState(false);
	return (
		<>
			{show && <Item/>}
			<button type='button' className='btn' onClick={() => setShow(!show)}>Toggle</button>
		</>
	);
}

const Item = () => {
	const [width,setWidth] = useState(window.innerWidth);
	const checkSize = () => {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener('resize',checkSize);	
		return () => {
			window.removeEventListener('resize',checkSize);
		}
	});
	return (
		<div>
			<h1>Window Size : {window.innerWidth}</h1>
		</div>
	);
}

export default ShowHide;
