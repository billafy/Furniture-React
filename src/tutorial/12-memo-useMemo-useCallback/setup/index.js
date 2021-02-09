import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const calculateMostExpensive = (data) => {
    console.log('Expensive');
    return data.reduce((total, item) => {
        const price = item.fields.price
        if(price>=total)
            total = price;
        return total;
    },0)/100;
}

const Index = () => {
    const { products } = useFetch(url);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    // useMemo will remember the return value of the passed function
    const mostExpensiveItem = useMemo(() => calculateMostExpensive(products), [products]);

    // useCallback makes sure the function will only be re-created when cart state changes
    const addToCart = useCallback(() => {
        setCart(cart+1);
    }, [cart]);

    return (
        <>
            <h1>Count : {count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>
                click me
            </button>
            <h3>Cart : {cart}</h3>
            <h3>Most Expensive Item : ${calculateMostExpensive(products)}</h3>
            <BigList products={products} addToCart={addToCart}/>
        </>
    );
};

// memo checks if props or state changes, if it changes then only the component is re-rendered

const BigList = memo(({ products, addToCart }) => {

    useEffect(() => {
        console.log('BigList'); 
    });

    return (
        <section className="products">
            {products.map((product) => {
                return (
                    <SingleProduct
                        key={product.id}
                        {...product}
                        addToCart = {addToCart}
                    ></SingleProduct>
                );
            })}
        </section>
    );
});

const SingleProduct = memo(({ fields , addToCart }) => {
    let { name, price } = fields;
    price = price / 100;
    const image = fields.image[0].url;

    useEffect(() => {
        console.log('Single product'); 
    });

    return (
        <article className="product">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={addToCart}>Add To Cart</button>
        </article>
    );
});
export default Index;
