import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from './App';
import './utils/home.css';
import {Link} from 'react-router-dom';
import GCF from './utils/gcf.png';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import Loading from './Loading';

const Home = () => {
	const {state:{featuredProducts, featuredProductsLoading}, getProducts} = useContext(AppContext);
	const [width, setWidth] = useState(window.innerWidth);
	const [currentProductIndex, setCurrentProductIndex] = useState(0);

	useEffect(() => {
		getProducts('FEATURED_PRODUCTS',0,0);
		console.log(featuredProducts[0]);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth);
			});
		};
	}, [width]);

	const selectPrevProduct = () => {
		if(currentProductIndex===0)
			setCurrentProductIndex(featuredProducts[featuredProducts.length-1]);
		else
			setCurrentProductIndex(currentProductIndex-1);
	}

	const selectNextProduct = () => {
		if(currentProductIndex===featuredProducts.length-1)
			setCurrentProductIndex(0);
		else
			setCurrentProductIndex(currentProductIndex+1);
	}

	return (
		<div className='home-page'>
			<div className='jumbotron'>
				<img src='https://www.ikea.com/images/sofa-and-armchairs-living-room-949c78fb58970789a9b74f3815daf306.jpg?f=xxxl'/>				
			</div>
			<div className='advertisement'>
				<img src={GCF}/>
				<article>
					<h3>Design Your Comfort Zone</h3>
					<p>
						Who said furniture should only fulfill its purpose? You can go a mile extra with your creativity skills by mixing 
						and matching different furniture designs to beautify your home decor. For example, you can set up quirky benches 
						as a seating arrangement instead of sofas in the living area and amp up the liveliness of your home. Similarly, 
						your bedroom furniture design reflects your personality, so it is all in the way you style it, then be it a 
						modular wardrobe or a loft bed with storage and desk functionality.
					</p>
					<Link to='/products'><button>Shop Now</button></Link>
				</article>					
			</div>	
			<div className='featured-products'>
				<h3>Featured Products</h3>
				{!featuredProductsLoading 
					?
						width > 868 
						?
						<div className='fp-list'>
							{featuredProducts.map(product => {
								if(product)
									return (
										<div className='fp-item' key={product.id}>
											<img src={product.image}/>
											<p>{product.name}</p>							
										</div>	
									);
							})}	
						</div>	
						:
						<div className='fp-slider'>
							<AiOutlineLeft onClick={selectPrevProduct}/>
							{featuredProducts[currentProductIndex] &&
								<div className='fp-item'>
									<img src={featuredProducts[currentProductIndex].image}/>
									<p>{featuredProducts[currentProductIndex].name}</p>							
								</div>
							}
							<AiOutlineRight onClick={selectNextProduct}/>						
						</div>
					:
					<Loading/>
				}		
			</div>
			<div className='subscribe-mail'>
				<h3>Subscribe to our mail service</h3>
				<p>
					Get to know about the latest products and offers.
				</p>
				<input placeholder='Enter E-mail Address'/>
				<button>Subscribe</button>
			</div>
		</div>	
	);
}

export default Home;