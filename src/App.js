import React, {useReducer} from "react";
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
	singleProductLoading: true
};

export const AppContext = React.createContext();

const App = () => {
	const [state,dispatch] = useReducer(reducer,defaultStates);

	const getProducts = async (type,id,filterTerm) => {
		const response = await fetch(url);
		const data = await response.json();
		dispatch({type:type,payload:{data,id,filterTerm}});
	}

	return (
		<AppContext.Provider value={{state,getProducts}}>
			<Router>
				<Navbar/>
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
				<Footer/>
			</Router>
		</AppContext.Provider>
	);
}

export default App;
