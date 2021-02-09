import React, {useEffect, useContext} from 'react';
import {AppContext} from './App';

const Products = () => {
	const {state:{products},getProducts} = useContext(AppContext);

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<h3>Products</h3>
			{products.map((product) => {
					return (
						<div key={product.id}>
							<img src={product.image}/>
							<p>{product.name}</p>	
						</div>
					);
				})}
		</>	
	);
}

export default Products;