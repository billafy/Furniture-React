import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './utils/navbar.css';
import { navlinks } from './utils/constants';
import { FaShoppingCart } from 'react-icons/fa';
import logo from './utils/furniturehome.png';
import {AppContext} from './App';

const Navbar = () => {
	const {state: {cartQuantity}} = useContext(AppContext);
	const [width, setWidth] = useState(window.innerWidth);
	const [showDropDown, setShowDropDown] = useState(false);

	useEffect(() => {
		window.addEventListener('resize',() => setWidth(window.innerWidth));
		return () => {
			window.removeEventListener('resize',() => setWidth(window.innerWidth));
		}
	}, [width]);

	return (
		<nav>
			<div className="home">
				<Link to='/' onClick={()=>setShowDropDown(false)}>
					<img className="homeimg"
						src={logo}
						alt="home"/>
				</Link>
			</div>
			{(showDropDown || width>768) &&
				<div className="left">
					<ul>
						{navlinks.map((link) => {
							return (
								<li key={link.id}><Link to={link.to} onClick={()=>setShowDropDown(false)}>{link.title}</Link></li>
							);
						})}
					</ul>
				</div>}
			<div className="right">
				<Link to='/cart' onClick={()=>setShowDropDown(false)}>
					<span><FaShoppingCart/></span>
					<div className='nav-cart-qty'>{cartQuantity}</div>
				</Link>
			</div>
			{width<768 && 
				<div className="burger">
					<button className="all-lines" onClick={()=>setShowDropDown(!showDropDown)}>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</button>
				</div>}
		</nav>
	);
}


export default Navbar;