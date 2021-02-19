import React, {useState, useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {reducer} from './utils/reducer';

import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import About from './About';
import Error from './Error';
import Footer from './Footer';

import './utils/global.css';

const url = 'https://course-api.com/react-store-products';

const defaultStates = {
	products: [],
	selectedProduct : {},
	productsLoading: true,
	singleProductLoading: true,
	cart: [],
	cartQuantity: 0,
	cartPrice: 0,
	featuredProducts: [],
	featuredProductsLoading: true,
	categories: ['all'],
	companies: ['all'],
	minPrice: 0,
	maxPrice: 0,
};

export const AppContext = React.createContext();

const App = () => {
	const [height, setHeight] = useState(window.innerHeight);
	const [state,dispatch] = useReducer(reducer,defaultStates);

	const getProducts = async (type,id,filterTerm) => {
		const response = await fetch(url);
		const data = await response.json();
		dispatch({type:type,payload:{data,id,filterTerm}});
	}

	const addToCart = (id) => {
		dispatch({type:'ADD_CART',payload:id});
	}

	const clearCart = () => {
		dispatch({type:'CLEAR_CART'});
	}

	const removeFromCart = (id) => {
		dispatch({type:'REMOVE_CART',payload:id});
	}

	const incrementCartItem = (id) => {
		dispatch({type:'INCREMENT_CART',payload:id});
	}

	const decrementCartItem = (id) => {
		dispatch({type:'DECREMENT_CART',payload:id});
	}

	useEffect(() => {
		window.addEventListener('resize',() => setHeight(window.innerHeight));
		return () => {
			window.removeEventListener('resize',() => setHeight(window.innerHeight));
		}
	}, [height]);

	return (
		<AppContext.Provider value={{state,getProducts,addToCart,clearCart,removeFromCart,incrementCartItem,decrementCartItem}}>
			<Router>
				<Navbar/>
				<section style={{minHeight:height-100,maxHeight:'auto'}}>
					<Switch>
						<Route exact path='/'>
							<Home/>						
						</Route>
						<Route path='/products'>
							<Products/>
						</Route>
						<Route path='/cart'>
							<Cart/>
						</Route>
						<Route path='/product/:id' children={<SingleProduct/>}></Route>
						<Route path='/about'>
							<About/>
						</Route>
						<Route path='*'>
							<Error/>						
						</Route>
					</Switch>
				</section>
				<Footer/>
			</Router>
		</AppContext.Provider>
	);
}

export default App;
