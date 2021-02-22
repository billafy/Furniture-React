import React from 'react';
import './utils/about.css';

const About = () => {
	return (
		<div className="about-page">
			<h1>About Us</h1>
			<div className='hover-container'>
				<p>
					Furniture refers to movable objects intended to support various human activities such as seating, 
					eating and sleeping. Furniture is also used to hold objects at a convenient height for work, or to store things. 
					Furniture can be a product of design and is considered a form of decorative art. In addition to furniture's functional 
					role, it can serve a symbolic or religious purpose.
				</p>
			</div>
			<hr/>
			<div className='hover-container'>
				<h3>Address</h3>
				<p>
					<a href='https://goo.gl/maps/Aj1XuU11aPWX5b4SA'>Game Circle, Discord</a>
				</p>				
			</div>
			<hr/>
			<div className='hover-container'>
				<h3>Showroom Locations</h3>
				<ul>
					<li>Mumbai</li>
					<li>Vishakhapattanam</li>
				</ul>
			</div>
			<hr/>
			<div className='hover-container'>
				<h3>Factory Locations</h3>
				<ul>
					<li>Chennai</li>
					<li>Michigan</li>
				</ul>				
			</div>
			<hr/>
			<div className='hover-container'>
				<h3>Contact Numbers</h3>
				<ul>
					<li>8433948281</li>
					<li>9374838283</li>
				</ul>				
			</div>
    	</div>
	);
}

export default About;