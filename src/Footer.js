import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import './utils/footer.css';
import {MdCall} from 'react-icons/md';
import {BsArrowUp} from 'react-icons/bs';

const socialLinks = [
	{
		id:1,
		title: 'Contact Us',
		icon: <MdCall/>,
		link : '#',
		color: '#6dcd9a',
	},
	{
		id:2,
		title: 'Facebook',
		icon: <FaFacebook/>,
		link: 'www.facebook.com',
		color: '#3D5B94',
	},
	{
		id:3,
		title: 'Twitter',
		icon: <FaTwitter/>,
		link: 'www.twitter.com',
		color: '#3DACDD',
	},
	{
		id:4,
		title: 'LinkedIn',
		icon: <FaLinkedin/>,
		link: 'www.linkedin.com',
		color: '#1E83AE',
	}
];

const Footer = () => {
	return (
		<footer>
	        <div class="top">
	            <div class="about">
	                <h2>About</h2>
	                <p>
	                	Furniture refers to movable objects intended to support various human activities such as seating 
	                	,eating and sleeping. Furniture is also used to hold objects at a convenient height for work, or 
	                	to store things. Furniture can be a product of design and is considered a form of decorative art. 
	                	In addition to furniture's functional role, it can serve a symbolic or religious purpose.
	                </p>
	            </div>
	            <div class="links-address">		            
	                <div class="address">
	                    <h2>Address</h2>
	                    <a class="link" href="https://goo.gl/maps/Aj1XuU11aPWX5b4SA">
	                    	Game Circle, Discord
	                    </a>
	                </div>
	            </div>
	        </div>
	        <div class="bottom">
	            <div class="copyright">
	                <p>&copy; 2021 - Organisation</p>
	            </div>
	            <div class="gototop">
	        		<a href=""><BsArrowUp/></a>
	   			 </div>	
	            <div class="social">
	                <ul>
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