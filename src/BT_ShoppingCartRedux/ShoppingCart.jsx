import React,{useState} from 'react'
import Cart from './Cart'
import ProducList from './ProducList'
import ProductDetails from './ProductDetails'

const ShoppingCart = () => {
  // Khi làm việc với redux, ta cần đánh giá, liệu cái giá trị state có cần phải tạo ở redux hay không
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <div className='container'>
      <h1 className='text-center text-primary'> shoppingcart Redux</h1>
      <div className="text-center text-primary d-flex justify-content-end">
          <button onClick={onOpen} className="btn btn-success" >
            Cart
          </button>
        </div>
      <ProducList />

      <ProductDetails/>
      
      <Cart isOpen ={isOpen} onClose={onClose}/>
    </div>
  )
}

export default ShoppingCart