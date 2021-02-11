import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from './App';
import {Link} from 'react-router-dom';
import Loading from './Loading';

const Products = () => {
	const [company,setCompany] = useState(null);
	const [priceRange,setPriceRange] = useState(null);
	const [category,setCategory] = useState(null);
	const {state:{products, productsLoading},getProducts} = useContext(AppContext);

	useEffect(() => {
		getProducts('ALL_PRODUCTS',0,0);
	}, [getProducts]);

	useEffect(() => {
		if(company)
			getProducts('FILTER_COMPANY',0,company);
	}, [company, getProducts]);

	useEffect(() => {
		if(priceRange)
			getProducts('FILTER_PRICE_RANGE',0,priceRange);
	}, [priceRange, getProducts]);

	useEffect(() => {
		if(category)
			getProducts('FILTER_CATEGORY',0,category);
	}, [category, getProducts]);

	if(productsLoading)
		return <Loading/>;
	else if(products.length===0)
		return <h3>No results</h3>;	
	return (
		<>
			<h3>Products</h3>
			{products.map((product) => {
					return (
						<div key={product.id}>
							<img src={product.image}/>
							<p>{product.name}</p>	
							<Link to={'/product/'+product.id}>More details</Link>
						</div>
					);
				})}
		</>	
	);
}

export default Products;