import React from 'react'
import { RestaurantsItems } from '../../components/restaurants-items/component';
import { Restaraunts } from '../../components/restaurants/component';

export const RestaurantsPage = ({ restaurants }) => {
    const restaurantsList = Array.from(new Set(restaurants.map(({ name }) => name)));
  
    return (
      <div>
        <RestaurantsItems
          restaurants={restaurantsList}
          onCategorySelect={(restaurant) => console.log(restaurant)}
        />

        <Restaraunts restaurantsElems={restaurants} />
      </div>
    );
  };