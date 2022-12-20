import { useState } from 'react';
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps){

    const [details, setDetails] = useState(false);

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
                >{details ? 'Hide' : 'Show'} Details</button>
            {details && 
                <>
                    <p className="text-center">{product.description}</p>
                    <p>Rate: <span className="font-bold">{product?.rating?.rate}</span></p>
                </>
            }
        </div>
    )
}