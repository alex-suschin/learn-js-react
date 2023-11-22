import React, { useState } from 'react'
import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaraunts } from '../../components/restaurants/component';

export const RestaurantsPage = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState('');
    const restaurantsList = Array.from(new Set(restaurants.map(({ name }) => name)));

    const checkActiveRestaurant = (e) => {
      setActiveRestaurant(e);
    }

    const filteredRestaurants = restaurants.filter(
      ({ name }) =>
        name === activeRestaurant
    );

    console.log('activeRestaurant', activeRestaurant);
  
    return (
      <div>
        <RestaurantTabs
          checkActiveRestaurant={checkActiveRestaurant}
          restaurants={restaurantsList}
          activeRestaurant={activeRestaurant}
          onCategorySelect={(restaurant) => console.log(restaurant)}
        />

        <Restaraunts restaurants={filteredRestaurants} activeRestaurant={activeRestaurant} />
      </div>
    );
  };