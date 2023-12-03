import React, { useState } from 'react'
import { Counter } from '../counter/component';
import styles from './styles.module.scss'

export const Dish = ({ dish }) => {
	const [amount, setAmount] = useState(0);

	let plus = () => {
		setAmount(amount + 1);
	}

	let minus = () => {
		setAmount(amount - 1);
	}

	return (
		<div className={styles.dish} key={dish.name}>
			<h4>Блюдо: {dish.name}</h4>
			<h5>Состав: {
				dish.ingredients.map((itm, idx) => (
					<span key={idx}>{itm + ' '}</span>
				))
			}</h5>
			<h4>Цена: {dish.price}$</h4>
			<Counter value={amount} increment={plus} decrement={minus} />
		</div>
	)
}
