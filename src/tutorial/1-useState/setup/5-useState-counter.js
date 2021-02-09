import React, { useState } from 'react';

const UseStateCounter = () => {
	const [number,setNumber] = useState(0);
	const increaseAfterThree = () => {
		setTimeout(() => {
			setNumber((prevState) => {
				return prevState + 1;
			})
		},3000);
	}
	return (
		<React.Fragment>
			<h3>Counter</h3>
			<h1>{number}</h1>
			<button type='button' className='btn' onClick={()=>setNumber(number+1)}>Increase</button>
			<button type='button' className='btn' onClick={()=>setNumber(number-1)}>Decrease</button>
			<button type='button' className='btn' onClick={()=>setNumber(0)}>Reset</button>
			<button type='button' className='btn' onClick={increaseAfterThree}>Increase after 3s</button>
		</React.Fragment>
	);
};

export default UseStateCounter;
