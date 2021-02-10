import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './utils/navbar.css';
import { navlinks } from './utils/constants';
import { FaShoppingCart } from 'react-icons/fa';
import furniturehome from './utils/furniturehome.png';

const Navbar = () => {
	return (
		<nav>
			<div className="home">
				<Link to='/'>
					<img className="homeimg"
						src={furniturehome}
						alt="home" />
				</Link>
			</div>
			<div className="left">
				<ul>
					{navlinks.map((link) => {
						return (
							<Link to={link.to} key={link.id}><li>{link.title}</li></Link>
						);
					})}
				</ul>
			</div>
			<div className="right">
				<Link to='/cart'><span className="carticon"><FaShoppingCart /></span></Link>
			</div>
			<div className="burger">
				<a className="all-lines">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</a>
			</div>
		</nav>
	);
}


export default Navbar;