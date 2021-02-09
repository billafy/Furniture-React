import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<h1>Page does not exist</h1>
			<p>
				<Link to="/" className='btn'>Back To Homepage</Link>
			</p>
		</div>
	);
};

export default Error;
