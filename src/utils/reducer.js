export const reducer = (state,action) => {
	if(action.type==='ALL_PRODUCTS') {
		return {
			...state, 
			products:action.payload.data, 
			productsLoading:false, 
			singleProductLoading:true,
			featuredProductsLoading: true
		};
	}
	else if(action.type==='SINGLE_PRODUCT') {
		const selectedProduct = action.payload.data.filter(product => action.payload.id===product.id);
		return {
			...state,
			selectedProduct:selectedProduct[0], 
			singleProductLoading:false, 
			productsLoading:true,
			featuredProductsLoading: true
		};		
	}
	else if(action.type==='FEATURED_PRODUCTS') {
		const randomIndex = Math.floor((Math.random()*action.payload.data.length-4) + 1)	
		return {
			...state,
			featuredProducts: [
				action.payload.data[randomIndex],
				action.payload.data[randomIndex+1],
				action.payload.data[randomIndex+2]
			],
			featuredProductsLoading: false,
		};	
	}
	else if(action.type==='FILTER_COMPANY') {
		const newProducts = state.products.filter(product => product.company===action.payload.filterTerm);
		return {...state, products:newProducts};
	}
	else if(action.type==='FILTER_PRICE_RANGE') {
		const newProducts = state.products.filter(product => product.price===action.payload.filterTerm);
		return {...state, products:newProducts};
	}
	else if(action.type==='FILTER_CATEGORY') {
		const newProducts = state.products.filter(product => product.category===action.payload.filterTerm);
		return {...state, products:newProducts};
	}
	else if(action.type==='ADD_CART') {
		const cartItems = state.cart.filter(item => item.product.id===action.payload);
		if(cartItems.length > 0) {
			const newCart = state.cart.map(item => {
				if(item.product.id===action.payload)
					return {
						...item,
						quantity: item.quantity + 1,
						totalPrice: item.totalPrice + cartItems[0].product.price,
					};
				return item;
			});
			return {...state, cart:newCart, cartQuantity:state.cartQuantity+1, cartPrice:state.cartPrice+cartItems[0].product.price};
		} 
		const cartProduct = state.products.filter(product => product.id===action.payload)[0];
		return {
			...state, 
			cart: [
				...state.cart,
				{
					id:new Date().getTime().toString(),
					product:cartProduct,
					quantity:1,
					totalPrice:cartProduct.price,
				}
			],
			cartQuantity:state.cartQuantity+1,
			cartPrice:state.cartPrice+cartProduct.price
		};
	}
	else if(action.type==='REMOVE_CART') {
		const cartItem = state.cart.filter(item => item.product.id===action.payload)[0];
		const newCart = state.cart.map(item => {
			if(item.product.id===action.payload)
				return {
					...item,
					quantity: 0,
					totalPrice: 0
				};
			return item;
		});
		return {
			...state,
			cart: newCart,
			cartQuantity: state.cartQuantity - cartItem.quantity,
			cartPrice: state.cartPrice - cartItem.totalPrice
		};
	}
	else if(action.type==='INCREMENT_CART') {
		const cartItem = state.cart.filter(item => item.product.id===action.payload)[0];
		const newCart = state.cart.map(item => {
			if(item.product.id===action.payload)
				return {
					...item,
					quantity: item.quantity + 1,
					totalPrice: item.totalPrice + cartItem.product.price
				};
			return item;
		});
		return {
			...state,
			cart: newCart,
			cartQuantity: state.cartQuantity + 1,
			cartPrice: state.cartPrice + cartItem.product.price
		};
	}
	else if(action.type==='DECREMENT_CART') {
		const cartItem = state.cart.filter(item => item.product.id===action.payload)[0];
		const newCart = state.cart.map(item => {
			if(item.product.id===action.payload)
				return {
					...item,
					quantity: item.quantity - 1,
					totalPrice: item.totalPrice - cartItem.product.price
				};
			return item;
		});
		return {
			...state,
			cart: newCart,
			cartQuantity: state.cartQuantity - 1,
			cartPrice: state.cartPrice - cartItem.product.price
		};
	}
	else if(action.type==='CLEAR_CART') {
		return {
			...state,
			cart: [],
			cartQuantity: 0,
			cartPrice: 0
		};
	}
	return state;
}