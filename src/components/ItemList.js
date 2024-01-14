import { IMG_CDN_URL } from '../config.js';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice.js';
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className='p-2 m-2  border-b-2 border-gray-200 text-left flex justify-between'
        >
          <div className='w-9/12'>
            <div className='py-2 tracking-normal'>
              <span>{item?.card?.info?.name}</span>
              <span>{' ₹' + item?.card?.info?.price / 100}</span>
            </div>
            <p className='text-xs tracking-wider'>
              {item?.card?.info?.description}
            </p>{' '}
          </div>
          <div className='w-3/12 p-4 relative flex justify-center'>
            <img src={IMG_CDN_URL + item?.card?.info?.imageId} />
            <button
              onClick={() => handleAddItems(item)}
              className='shadow-xl p-2 bg-slate-200 rounded-xl text-green-700 text-lg hover:bg-slate-300 absolute bottom-2 m-auto'
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
