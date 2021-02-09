import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import SingleProduct from './SingleProduct';
import About from './About';
import Error from './Error';
import Footer from './Footer';

const url = 'https://course-api/react-store-products';

const App = () => {
	return (
		<>
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path='/'>
						<Home/>						
					</Route>
					<Route path='/products'>
						<Products/>
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
		</>
	);
}

export default App;
