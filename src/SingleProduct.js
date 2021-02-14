import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {AppContext} from './App';
import Loading from './Loading';

const SingleProduct = () => {
	const {id} = useParams();
	const {state:{selectedProduct, singleProductLoading},getProducts,addToCart} = useContext(AppContext);

	useEffect(() => {
		getProducts('SINGLE_PRODUCT',id,0);
	}, [id, getProducts]);

	if(singleProductLoading)
		return <Loading/>;
	return (
		<>
			<h3>{selectedProduct.name}</h3>
			<button onClick={()=>addToCart(selectedProduct.id)}>Add To Cart</button>
		</>	
	);
}

export default SingleProduct;