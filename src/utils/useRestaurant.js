import { useEffect, useState } from 'react';
import { REST_MENU_URL } from '../config';
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(REST_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  return restaurant;
};
export default useRestaurant;
