import React, { useEffect } from 'react';

const Modal = ({text}) => {
	return (
		<>
			<div className='modal'>
				<p>{text}</p>
			</div>
		</>	
	);
};

export default Modal;
