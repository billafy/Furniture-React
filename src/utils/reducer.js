const reducer = (state,action) => {
	if(action.type==='GET_PRODUCTS') {
		const products = action.payload.map((product) => {
			return {
				id:product.id,
				name:product.name,
				image:product.image,
				category:product.category,
				description:product.description,
				company:product.company,
				price:product.price
			};
		});
		console.log(products);
		return {...state, products:products};
	}
}

export default reducer;