import { useSelector } from 'react-redux';
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
    <div className='text-center w-6/12 m-auto'>
      <h1 className=' m-4 p-4 font-bold text-2xl'>Cart</h1>
      <button
        onClick={handleClearCart}
        className='m-2 p-2 bg-slate-200 hover:bg-slate-100 rounded-lg text-green-600 '
      >
        Clear Cart
      </button>
      <ItemList items={cartItems} />
    </div>
  );
};
export default Cart;
