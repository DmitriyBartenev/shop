import { useEffect, useState } from "react";

import axios from "axios";

import { IProduct } from "../models";

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function addProduct(product: IProduct){
        setProducts(prev => [...prev, product]);
    }
    
    function removeProduct(id: number){
        const newList = products.filter(item => item.id !== id)
        console.log(newList)
        setProducts(newList)
    }

    async function fetchProducts(){
        try{
            setError('')
            setLoading(true);
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProducts(response.data)
            setLoading(false);
        }catch(e: unknown){
            const error = e as Error;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts()
    },[])

    return{ products, error, loading, addProduct, removeProduct }
}