import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
	return (
		<article className="product">
			<img src={image ? image.url : defaultImage}/>
			<h3>{name}</h3>
			<p>${price}</p>
		</article>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired ,
};

Product.defaultProps = {
	name: 'Unknown',
	price: 0.0,
}


export default Product;
