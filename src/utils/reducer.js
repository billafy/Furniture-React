export const reducer = (state,action) => {
	if(action.type==='ALL_PRODUCTS') {
		return {
			...state, 
			products:action.payload.data, 
			productsLoading:false, 
			singleProductLoading:true
		};
	}
	else if(action.type==='SINGLE_PRODUCT') {
		const selectedProduct = action.payload.data.filter(product => action.payload.id===product.id);
		return {
			...state,
			selectedProduct:selectedProduct[0], 
			singleProductLoading:false, 
			productsLoading:true
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
	return state;
}