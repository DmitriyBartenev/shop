import { useState } from 'react';
import { IProduct } from "../models";
import { useProducts } from '../hooks/products';
interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps){

    const [details, setDetails] = useState(false);

    const { removeProduct } = useProducts();

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return(
        <div className="relative border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button 
                className={btnClasses.join(' ')}
                onClick={() => setDetails(!details)}
                >{details ? 'Hide' : 'Show'}Details</button>
            {details && 
                <>
                    <p className="text-center">{product.description}</p>
                    <p>Rate: <span className="font-bold">{product?.rating?.rate}</span></p>
                    <div className='flex w-full justify-evenly items-center'>
                        <button className="bg-blue-400 rounded-sm p-2">Add To Cart</button>
                        <button className="bg-red-600 rounded-sm p-2" onClick={() => removeProduct(product.id)}>Delete</button>
                    </div>
                </>
            }
        </div>
    )
}