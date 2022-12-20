import { useState } from 'react';

import { useProducts } from "./hooks/products";

import { Product } from "./components/Product";
import { IProduct } from './models';

import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";

const App = () => {

    const [modal, setModal] = useState(false);

    const {error, loading, products, addProduct} = useProducts();

    const createHandler = (product: IProduct) => {
        setModal(false);
        addProduct(product);
    }

    const onClose = () => {
        setModal(false);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(item => <Product key={item.id} product={item}/>)}

            {modal && 
            <Modal title='Create new product' onClose={onClose}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>  }  
            <div className='flex items-center justify-center mb-2'>
                <button className='rounded-sm bg-blue-700 text-white text-2xl px-4 py-2' onClick={() => setModal(true)}>
                    Add More 
                </button>
            </div>
        </div>
    )
}

export default App;