import React from 'react'

export const RestaurantTab = ({title, funcTabClick}) => {
  return (
    <button onClick={funcTabClick}>{title}</button>
  )
}
