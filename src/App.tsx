import { Header } from './components/Header';

import { useContext } from 'react';

import { useProducts } from "./hooks/products";

import { Product } from "./components/Product";
import { IProduct } from './models';

import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import { ModalContext } from './context/ModalContext';

const App = () => {

    const {error, loading, products, addProduct} = useProducts();

    const {modal, open, close} = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    }

    return (
        <>
            <Header title='Here is Title'/>
            <div className="container mx-auto max-w-2xl pt-5">
                {loading && <Loader/>}
                {error && <ErrorMessage error={error}/>}
                {products.map(item => <Product key={item.id} product={item}/>)}
                {modal && 
                <Modal title='Create new product' onClose={close}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>  }  
                <div className='flex items-center justify-center mb-2'>
                    <button className='rounded-sm bg-blue-700 text-white text-2xl px-4 py-2' onClick={open}>
                        Add More 
                    </button>
                </div>
            </div>
        </>
    )
}

export default App;