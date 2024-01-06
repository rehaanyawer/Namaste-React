import { IMG_CDN_URL } from '../config';
export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <div className='w-56 p-2 m-2 shadow-lg bg-gray-200 h-96'>
      <div className=''>
        <img className='h-56 w-56' src={IMG_CDN_URL + cloudinaryImageId}></img>
        <h2 className='font-bold text-xl'>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{avgRating}stars</h4>
      </div>
    </div>
  );
};
