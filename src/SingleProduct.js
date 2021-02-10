import React, {useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import {AppContext} from './App';
import Loading from './Loading';

const SingleProduct = () => {
	const {id} = useParams();
	const {state:{selectedProduct, singleProductLoading},getProducts} = useContext(AppContext);

	useEffect(() => {
		getProducts('SINGLE_PRODUCT',id,0);
	}, []);

	if(singleProductLoading)
		return <Loading/>;
	return (
		<>
			<h3>{selectedProduct.name}</h3>
		</>	
	);
}

export default SingleProduct;