import React, {useEffect, useContext} from 'react';
import {AppContext} from './App';

const Home = () => {
	const {state:{featuredProducts}, getProducts} = useContext(AppContext);

	useEffect(() => {
		getProducts('FEATURED_PRODUCTS',0,0);
	}, []);

	return (
		<>
			<h3>Home</h3>
			{featuredProducts && 
				featuredProducts.map(product => {
					return (
						<div key={product.id}>
							<img src={product.image}/>
							{product.name}							
						</div>	
					);
				})}
		</>	
	);
}

export default Home;