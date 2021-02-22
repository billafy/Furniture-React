import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import './utils/footer.css';
import {Link} from 'react-router-dom';
import {MdCall} from 'react-icons/md';
import {BsArrowUp} from 'react-icons/bs';

const socialLinks = [
	{
		id:2,
		title: 'Facebook',
		icon: <FaFacebook/>,
		link: 'https://www.facebook.com',
		color: '#3D5B94',
	},
	{
		id:3,
		title: 'Twitter',
		icon: <FaTwitter/>,
		link: 'https://www.twitter.com',
		color: '#3DACDD',
	},
	{
		id:4,
		title: 'LinkedIn',
		icon: <FaLinkedin/>,
		link: 'https://www.linkedin.com',
		color: '#1E83AE',
	}
];

const Footer = () => {
	return (
		<footer>
	        <div className="top">
	            <div className="about">
	                <h2>About</h2>
	                <p>
	                	Furniture refers to movable objects intended to support various human activities such as seating 
	                	,eating and sleeping. Furniture is also used to hold objects at a convenient height for work, or 
	                	to store things. Furniture can be a product of design and is considered a form of decorative art. 
	                	In addition to furniture's functional role, it can serve a symbolic or religious purpose.
	                </p>
	            </div>
	            <div className="links-address">		            
	                <div className="address">
	                    <h2>Address</h2>
	                    <a className="link" href="https://goo.gl/maps/Aj1XuU11aPWX5b4SA">
	                    	Game Circle, Discord
	                    </a>
	                </div>
	            </div>
	        </div>
	        <div className="bottom">
	            <div className="copyright">
	                <p>&copy; 2021 - Organisation</p>
	            </div>
	            <div className="gototop">
	        		<a href="#top"><BsArrowUp/></a>
	   			 </div>	
	            <div className="social">
	                <ul>
	                	<li><Link to='/about'><MdCall style={{color:'skyblue'}}/></Link></li>
	                	{socialLinks.map((socialLink) => {
	                			return (
	                				<li key={socialLink.id}>
	                					<a href={socialLink.link} title={socialLink.title} style={{color:socialLink.color}}>
	                						{socialLink.icon}
	                					</a>
                					</li>	
                				);
	                		})}
	                </ul>
	            </div>
	        </div>
	    </footer>
	);
}

export default Footer;