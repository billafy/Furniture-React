import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './utils/navbar.css';
import { navlinks } from './utils/constants';
import { FaShoppingCart } from 'react-icons/fa';
import furniturehome from './utils/furniturehome.png';

const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [showDropDown, setShowDropDown] = useState(false);

	useEffect(() => {
		window.addEventListener('resize',() => setWidth(window.innerWidth));
		if(width>768)
			setShowDropDown(true);
		return () => {
			window.removeEventListener('resize',() => setWidth(window.innerWidth));
		}
	}, [width]);

	return (
		<nav>
			<div className="home">
				<Link to='/'>
					<img className="homeimg"
						src={furniturehome}
						alt="home"/>
				</Link>
			</div>
			{showDropDown &&
				<div className="left">
					<ul>
						{navlinks.map((link) => {
							return (
								<li key={link.id}><Link to={link.to}>{link.title}</Link></li>
							);
						})}
					</ul>
				</div>}
			<div className="right">
				<Link to='/cart'><span><FaShoppingCart/></span></Link>
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