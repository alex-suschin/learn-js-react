import React from 'react'

export const Review = ({rewiew}) => {
  return (
    <div key={rewiew.id}>
        <h4>Имя: {rewiew.user}</h4>
        <p>{rewiew.text}</p>
    </div>
  )
}
