import { IMG_CDN_URL } from '../config';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';
export const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating } = resData;
  const data = useContext(UserContext);
  return (
    <div className='w-56 p-2 m-2 shadow-lg bg-slate-50 hover:bg-gray-200 h-96 rounded-xl'>
      <div className=''>
        <img
          className='h-56 w-56 mb-3 rounded-xl'
          src={IMG_CDN_URL + cloudinaryImageId}
        ></img>
        <h2 className='font-bold text-xl mb-2 tracking-wider'>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{avgRating}stars</h4>
        <h5>{data.newUser}</h5>
      </div>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute text-white bg-black rounded-lg p-1'>
          Opened
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
