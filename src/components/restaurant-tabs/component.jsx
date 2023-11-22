import React from 'react'
import { RestaurantTab } from '../restaurant-tab/component'

export const RestaurantTabs = ({restaurants, activeRestaurant, checkActiveRestaurant}) => {

    const buttonRestaurantClick = () => {
        console.log(1)
    }

    console.log('activeRestaurant', activeRestaurant);

    return (
        <div>
            {restaurants.map((name, index) => (
                <RestaurantTab key={name} title={name} checkActiveRestaurant={() => checkActiveRestaurant(name)} />
            ))}
        </div>
    )
}