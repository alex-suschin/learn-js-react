import React from 'react'
import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaraunts } from '../../components/restaurants/component';

export const RestaurantsPage = ({ restaurants }) => {
    const restaurantsList = Array.from(new Set(restaurants.map(({ name }) => name)));
  
    return (
      <div>
        <RestaurantTabs
          restaurants={restaurantsList}
          onCategorySelect={(restaurant) => console.log(restaurant)}
        />

        <Restaraunts restaurants={restaurants} />
      </div>
    );
  };