import React from 'react'
import { RestaurantTab } from '../restaurant-tab/component'
import styles from './styles.module.scss'

export const RestaurantTabs = ({ activeRestaurant, restaurants, onTabClick }) => {
    return (

        <div className={styles.restaurantTabs}>
            {restaurants.map(({ name }, index) => (
                <RestaurantTab activeRestaurant={activeRestaurant} key={name} title={name} onClick={() => onTabClick(index)} />
            ))}
        </div>
    )
}