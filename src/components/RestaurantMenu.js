import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import UseRestaurant from '../utils/useRestaurant';
import useInternet from '../utils/useInternet';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
const RestaurantMenu = () => {
  const isOffline = useInternet();
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const restaurant = UseRestaurant(resId);

  if (!restaurant) {
    return <Shimmer />;
  }

  const { costForTwoMessage, name, cuisines } =
    restaurant?.data?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  //to control the childs

  if (isOffline) return <h1> oops internet error</h1>;
  return (
    <div className='text-center'>
      {/* <h1>restaurant id: {resId}</h1> */}
      <h1 className='font-bold my-3 text-2xl p-3'>{name}</h1>
      <p className='font-bold text-lg p-3'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* {console.log(categories)} */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.name}
          description={index === showIndex ? true : false}
          setShowIndex={setShowIndex}
          index={index}
          showIndex={showIndex}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
