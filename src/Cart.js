import React, {useContext} from 'react';
import {AppContext} from './App';

const Cart = () => {
	const {state:{cart,cartQuantity,cartPrice},removeFromCart,incrementCartItem,decrementCartItem,clearCart} = useContext(AppContext);

	if(cartQuantity===0)
		return (
			<h1>Cart Empty :(</h1>	
		);
	return (
		<>
			<div>
				{cart.map(item => {
						if(item.quantity>0)
							return (
								<div key={item.id}>
									<h1>{item.product.name}</h1>
									<p>{item.quantity}</p>
									<span>{item.totalPrice}</span>
									<button onClick={()=>incrementCartItem(item.product.id)}>Increase</button>		
									<button onClick={()=>decrementCartItem(item.product.id)}>Decrease</button>
									<button onClick={()=>removeFromCart(item.product.id)}>Remove</button>						
								</div>			
							);
					})}
				<button onClick={clearCart}>Clear</button>
				<h1>Total Quantity : {cartQuantity}</h1>
				<h1>Total Price : {cartPrice}</h1>
			</div>
		</>	
	);
}

export default Cart;