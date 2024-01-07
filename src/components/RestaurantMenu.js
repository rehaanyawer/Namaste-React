import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../config';
import UseRestaurant from '../utils/useRestaurant';
import useInternet from '../utils/useInternet';

const RestaurantMenu = () => {
  const isOffline = useInternet();
  const { resId } = useParams();

  const restaurant = UseRestaurant(resId);

  if (isOffline) return <h1> oops internet error</h1>;
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className=''>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
      <h1>restaurant id: {resId}</h1>
      <h2>restaurant Name {restaurant?.name}</h2>
      <h3>Cost for Two: {restaurant?.costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
