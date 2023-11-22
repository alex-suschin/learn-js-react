import React, { useState } from 'react'

export const Dish = ({dish}) => {

  const [col, setCol] = useState(0);

  let plus = () => {
    setCol(col+1);
  }

  let minus = () => {
    setCol(col-1);
  }
  
  return (
    <div key={dish.name}>
        <h4>Блюдо: {dish.name}</h4>
        <h5>Состав: {
            dish.ingredients.map((itm, idx) => (
                <span key={idx}>{itm + ' '}</span>
            ))
            }</h5>
        <h4>Цена: {dish.price}</h4>
        <div>
          <button onClick={minus}>-</button>
          <input type="text" placeholder='Кол-во' defaultValue="0" value={col} min={0} max={5} />
          <button onClick={plus}>+</button>
        </div>
        <br />
    </div>
  )
}
