export const reducer = (state,action) => {
	if(action.type==='ALL_PRODUCTS') {
		let minPrice = Number.POSITIVE_INFINITY, maxPrice = Number.NEGATIVE_INFINITY;
		const categories = [...new Set(action.payload.data.map(product => {
			if(product.price < minPrice)
				minPrice = product.price;
			if(product.price > maxPrice)
				maxPrice = product.price;
			return product.category;
		}))];
		const companies = [...new Set(action.payload.data.map(product => { 
			return product.company;
		}))];
		return {
			...state, 
			allProducts: action.payload.data,
			products:action.payload.data, 
			productsLoading:false, 
			singleProductLoading:true,
			featuredProductsLoading: true,
			categories: categories,
			companies: companies,
			minPrice: minPrice,
			maxPrice: maxPrice,
		};
	}
	else if(action.type==='SINGLE_PRODUCT') {
		const selectedProduct = action.payload.data.filter(product => action.payload.id===product.id);
		return {
			...state,
			allProducts: action.payload.data,
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
			allProducts: action.payload.data,
			featuredProducts: [
				action.payload.data[randomIndex],
				action.payload.data[randomIndex+1],
				action.payload.data[randomIndex+2]
			],
			featuredProductsLoading: false,
		};	
	}
	else if(action.type==='FILTER') {
		let newProducts = action.payload.data;
		const {searchTerm, category, price, company} = action.payload.filterTerm;
		if(searchTerm!=='') {
			newProducts = newProducts.filter(product => product.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
		}
		if(category!=='all') {
			newProducts = newProducts.filter(product => product.category===category);
		}
		if(company!=='all') {
			newProducts = newProducts.filter(product => product.company===company);
		}
		newProducts = newProducts.filter(product => product.price<=price);
		return {...state, allProducts:action.payload.data, products:newProducts};
	}
	else if(action.type==='ADD_CART') {
		const cartItems = state.cart.filter(item => item.product.id===action.payload.id);
		if(cartItems.length > 0) {
			const newCart = state.cart.map(item => {
				if(item.product.id===action.payload.id)
					return {
						...item,
						quantity: item.quantity + 1,
						totalPrice: item.totalPrice + cartItems[0].product.price,
					};
				return item;
			});
			return {...state, cart:newCart, cartQuantity:state.cartQuantity+1, cartPrice:state.cartPrice+cartItems[0].product.price};
		} 
		const cartProduct = action.payload;
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