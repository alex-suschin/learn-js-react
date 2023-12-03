import React from 'react'

export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  return (
    <div>
      <button onClick={decrement} disabled={value <= min}>-</button>
      {/* <input type="text" placeholder='Кол-во' defaultValue="0" value={value} /> */}
      <span>{value}</span>
      <button onClick={increment} disabled={value >= max}>+</button>
    </div>
  )
}
