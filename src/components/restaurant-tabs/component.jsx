import React from 'react'
import { RestaurantTab } from '../restaurant-tab/component'

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div>
            {restaurants.map(({name}, index) => (
                <RestaurantTab key={name} title={name} onClick={() => onTabClick(index)} />
            ))}
        </div>
    )
}