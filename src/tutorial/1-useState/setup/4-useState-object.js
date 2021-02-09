import React, { useState } from "react";

const UseStateObject = () => {
	const [food,setFood] = useState({name:'Apple',taste:'Sweet',price:'10'});
	const changeFoodItem = () => {
		setFood({...food,price:'1'});
	}
	return (
		<React.Fragment>
			<h1>{food.name}</h1>
			<h3>{food.taste}</h3>
			<p>{food.price}</p>
			<button type='button' className='btn' onClick={changeFoodItem}>Change food item</button>
		</React.Fragment>	
	);	
};

export default UseStateObject;
