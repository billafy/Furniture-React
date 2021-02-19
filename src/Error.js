import React from 'react';
import {Link} from 'react-router-dom';
import './utils/error.css';

const Error = () => {
	return (
		<div className="error">
            <h2>Oops! Page not found.</h2>
            <h1>ERROR</h1>
            <p>We can't find the page you're looking for :(</p>
            <Link to='/'>Back Home</Link>
    	</div>
	);
}

export default Error;