import React from 'react'
import styles from './styles.module.scss'

export const RestaurantTab = ({ title, onClick, activeRestaurant }) => {
  return (
    <button className={`${styles.tab}  ${activeRestaurant.name === title ? styles.tabActive : ''}`} onClick={onClick}>{title}</button>
  )
}
