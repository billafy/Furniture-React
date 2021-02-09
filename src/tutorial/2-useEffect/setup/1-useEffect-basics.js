import React, { useState, useEffect } from 'react';

// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
	const [number,setNumber] = useState(0);
	const [state,setState] = useState(false);
	useEffect(() => {
		if(number>0)
			document.title = 'Count : ' + number;
	},[state]);
	const switchState = () => {
		if(state)
			setState(false);
		else
			setState(true);
	}
	return (
		<>
			<h1>{number}</h1>
			<button type='button' className='btn' onClick={()=>setNumber(number+1)}>Click</button>
			<button type='button' className='btn' onClick={switchState}>Switch</button>
		</>
	);
};

export default UseEffectBasics;
	