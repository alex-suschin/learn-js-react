import React from 'react'
import { RestaurantTab } from '../restaurant-tab/component'

export const RestaurantTabs = ({restaurants, funcTabClick}) => {
    return (
        <div>
            {restaurants.map((name, index) => (
                <RestaurantTab key={name} title={name} onClick={() => funcTabClick(index)} />
            ))}
        </div>
    )
}