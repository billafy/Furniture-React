import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";
import './fetch.css';

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
    const { isLoading, data, isError } = useFetch(url);

    const [products, setProducts] = useState(data);

    useEffect(() => {
        setProducts(data);
    });

    if(isLoading)
        return (
            <>
                <h1>Loading...</h1>
            </>    
        );
    else if(isError)
        return (
            <>
                <h1>Error fetching content</h1>
            </>    
        );
    return (
        <>
            {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <img src={product.fields.image[0].url}/>
                            <h1>{product.fields.company} - {product.fields.name}</h1>                            
                        </div>    
                    );
                })}
        </>    
    );
};

export default Example;
