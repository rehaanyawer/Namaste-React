import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <button
        onClick={handleClearCart}
        className='bg-gray-400 rounded-xl text-green-600 m-2 p-2 hover:bg-slate-400'
      >
        Clear Cart
      </button>
      <div className='w-6/12 m-auto'>
        {cartItems.length === 0 && <h1>Add some Items please</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
