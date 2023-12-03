import React from 'react'
import styles from './styles.module.scss'

export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={decrement} disabled={value <= min}>-</button>
      {/* <input type="text" placeholder='Кол-во' defaultValue="0" value={value} /> */}
      <span className={styles.value}>{value}</span>
      <button className={styles.button} onClick={increment} disabled={value >= max}>+</button>
    </div>
  )
}
