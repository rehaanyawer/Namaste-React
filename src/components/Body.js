import Shimmer from './Shimmer';
import { RestaurantCard } from './RestaurantCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInternet from '../utils/useInternet';

function filterData(allRestaurants, searchText) {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filteredData;
}

export const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const isOffline = useInternet();

  //use effect function
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;
  if (isOffline) {
    return <h1>oops no internet</h1>;
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className='m-3 p-1'>
        <input
          type='text'
          className='border p-1'
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='bg-purple-700 m-2 p-1 rounded-md hover:bg-purple-800 text-white'
          onClick={() => {
            const data = filterData(allRestaurants, searchText);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className='flex flex-wrap justify-center'>
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={'/restaurant/' + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
