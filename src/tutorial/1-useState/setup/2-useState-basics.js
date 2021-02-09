import React, { useState } from 'react';

const UseStateBasics = () => {
	const [name,setName] = useState('Yash');
	const changeLabel = () => {
		if(name==='Yash')
			setName('Billa');
		else
			setName('Yash');
	}
	return (
		<React.Fragment>
			<h3>{name}</h3>
			<button type='button' className='btn' onClick={changeLabel}>Change the name</button>
		</React.Fragment>	
	)
};

export default UseStateBasics;
