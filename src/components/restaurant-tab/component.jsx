import React from 'react'

export const RestaurantTab = ({title, onClick }) => {
  return (
    <button onClick={onClick }>{title}</button>
  )
}
