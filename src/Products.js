import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from './App';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import './utils/products.css';
import {AiFillCaretDown} from 'react-icons/ai';

const Products = () => {
	const {state:{products, productsLoading, categories, companies, minPrice, maxPrice},getProducts} = useContext(AppContext);
	const [searchTerm, setSearchTerm] = useState('');
	const [category, setCategory] = useState('all');
	const [company, setCompany] = useState('all');
	const [width, setWidth] = useState(window.innerWidth);
	const [showFilters, setShowFilters] = useState(false);
	const [price, setPrice] = useState(100000000);

	useEffect(() => {
		getProducts('ALL_PRODUCTS',0,0);
	}, []);

	useEffect(() => {
		getProducts('FILTER',0,{searchTerm,category,price,company});
	}, [category, searchTerm, price, company]);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
		return () => {
			window.removeEventListener('resize', () => setWidth(window.innerWidth));
		}
	}, [width]);

	const clearFilters = () => {
		setCategory('all');
		setPrice(maxPrice);
		setCompany('all');
		setSearchTerm('');
		setShowFilters(false);
	}

	if(productsLoading)
		return <Loading/>;
	return (
		<>
			<form className='search-bar'>
				<input type='text' placeholder='Search by name' value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}/>
			</form>
			<div className='filter-products-container'>
				<div className='filter-bar'>
					{width < 768 && 
						<button className='mobile-filters' onClick={()=>setShowFilters(!showFilters)}>
							Filters <AiFillCaretDown/>
						</button>}
					{(width > 768 || showFilters) &&
						<div className='filters'>
							<div className='category-buttons'>
								<button value='all' className={category==='all'?'selected':''} onClick={()=>setCategory('all')}>All</button>
								{categories.map(cat => {
										return (
											<button value={cat} className={category===cat?'selected':''} onClick={(event)=>setCategory(event.target.value)}>
												{cat}
											</button>
										);
									})}
							</div>
							<div className='price-slider'>
								<input type='range' min={minPrice} max={maxPrice} value={price} onChange={(event)=>setPrice(event.target.value)}/>						
								<span>${price !== 100000000 ? price : maxPrice}</span>
							</div>
							<div className='company-dropdown'>
								Company &nbsp;
								<select onChange={(event)=>setCompany(event.target.value)} value={company}>
									<option value='all'>All</option>
									{companies.map(company => {
											return (
												<option value={company}>{company}</option>	
											);
										})}							
								</select>						
							</div>		
							<button className='clear-filters' onClick={clearFilters}>Clear Filters</button>
						</div>
					}
				</div>
				<div className='products-list'>
					{products.map(product => {
							return (
								<Link to={'/product/'+product.id} key={product.id}>
									<div className='product'>
										<div className='product-image'>
											<img src={product.image}/>
										</div>
										<div className='product-details'>
											<h3>{product.name}</h3>
											<h6>{product.company}</h6>
											<p>{product.category}</p>									
										</div>
										<span>${product.price}</span>
									</div>
								</Link>	
							);
						})}				
				</div>
			</div>
		</>	
	);
}

export default Products;