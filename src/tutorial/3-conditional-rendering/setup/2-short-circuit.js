import React, { useState } from 'react';

const ShortCircuit = () => {
	const [text,setText] = useState('Yash');
	const [isError,setIsError] = useState(false);
	return (
		<>
			<h1>{text || 'Random'}</h1>
			<h1>{text && 'Unknown'}</h1>
			<h1>{isError ? 'Error' : 'Hello boi '+text}</h1>
			<button type='button' className='btn' onClick={() => setIsError(!isError)}>Toggle</button>
		</>
	);
};

export default ShortCircuit;
