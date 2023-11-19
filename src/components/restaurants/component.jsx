import React from 'react'
import { Restaurant } from '../restaurant/component'

export const Restaraunts = ({restaurantsElems}) => {
  return (
    <div>
      {restaurantsElems.map((elem) => (
        <Restaurant elem={elem}></Restaurant>
      ))}
    </div>
    
  )
}
