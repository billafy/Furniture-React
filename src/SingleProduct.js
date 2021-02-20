import React, {useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import {AppContext} from './App';
import Loading from './Loading';
import './utils/singleproduct.css';
import {BsArrowLeft} from 'react-icons/bs';

const SingleProduct = () => {
	const {id} = useParams();
	const {state:{selectedProduct, singleProductLoading},getProducts,addToCart} = useContext(AppContext);

	useEffect(() => {
		getProducts('SINGLE_PRODUCT',id);
	}, [id, getProducts]);

	if(singleProductLoading)
		return <Loading/>;
	return (
		<section className='single-product'>
			<Link to='/products'><BsArrowLeft/></Link>
			<img src={selectedProduct.image}/>
			<div className='single-product-details'>
				<h3>{selectedProduct.name}</h3>
				<h6>{selectedProduct.company}</h6>
				<p>{selectedProduct.description}</p>
				<span>Category : {selectedProduct.category}</span>		
			</div>
			<div className='add-to-cart'>
				<button onClick={()=>addToCart(selectedProduct)}>Add To Cart</button>
				<span>${selectedProduct.price}</span>				
			</div>
		</section>	
	);
}

export default SingleProduct;