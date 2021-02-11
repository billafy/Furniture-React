import React from 'react';
import './utils/loading.css';
import {GiSofa} from 'react-icons/gi';

const Loading = () => {
	return (
		<>
			<div className='loading'>
				<GiSofa/>
			</div>
		</>	
	);
}

export default Loading;