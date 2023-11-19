import React from 'react'
import { RestaurantsItem } from '../restaurants-item/component'

export const RestaurantsItems = ({restaurants, restaurantsElems}) => {
    return (
        <div>
            {restaurants.map((names, onCategorySelect) => (
                <RestaurantsItem key={names} restaurantsElems={restaurantsElems} title={names} onClick={() => onCategorySelect(names)} />
            ))}
        </div>
    )
  }