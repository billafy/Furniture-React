import React from "react";

const ErrorExample = () => {
	let name = "Yash";
	const changeLabel = () => {
		name = 'Billa';
		console.log(name);
	};
	return (
		<div className="container">
			<h3 id="label">{name}</h3>
			<button type='button' onClick={changeLabel} className='btn'>Change the label</button>
		</div>
	);
};

export default ErrorExample;
