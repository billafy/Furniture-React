import React, {useContext} from 'react';
import {AppContext} from './App';
import {Link} from 'react-router-dom';
import './utils/cart.css';
import {BiUpArrow, BiDownArrow} from 'react-icons/bi';

const Cart = () => {
	const {state:{cart,cartQuantity,cartPrice},removeFromCart,incrementCartItem,decrementCartItem,clearCart} = useContext(AppContext);

	if(cartQuantity===0)
		return (
			<div className='empty-cart'>
				<h1>Cart</h1>
				<p>No items added yet.</p>
				<Link to='/products'><button>Shop now</button></Link>
			</div>	
		);
	return (
		<>
			<div className='cart'>
				<h1>Cart</h1>
				<div className='cart-items'>
					{cart.map(item => {
							if(item.quantity>0)
								return (
									<div key={item.id} className='cart-item'>
										<img src={item.product.image}/>
										<div className='cart-item-details'>
											<p className='cart-item-name'>{item.product.name}</p>
											<p>{item.product.company}</p>
											<p>${item.product.price}</p>
											<button onClick={()=>removeFromCart(item.product.id)}>Remove</button>										
										</div>
										<div className='cart-inc-dec'>
											<BiUpArrow onClick={()=>incrementCartItem(item.product.id)}/>
											<p className='cart-item-quantity'>{item.quantity}</p>
											<BiDownArrow onClick={()=>decrementCartItem(item.product.id)}/>	
											<p>${item.totalPrice}</p>							
										</div>
									</div>	
								);
							return <></>;
						})}
				</div>
				<div className='cart-details'>
					<p>Number of Items <span> {cartQuantity} </span></p>
					<p>Total Price <span> ${cartPrice} </span></p>
					<button onClick={()=>clearCart()}>Clear Cart</button>
				</div>
				<div className='cart-order'>
					<textarea placeholder='Enter Delivery Address'/><br/>
					<button>Place Order</button>
				</div>
			</div>
		</>	
	);
}

export default Cart;