import React from 'react'
import { Dish } from '../dish/component'
import { Review } from '../review/component'
import FormReveiew from '../form-reveiw/component'
import styles from './styles.module.scss'

export const Restaurant = ({ restaurant }) => {
	return (
		<div className={styles.restaurant}>
			<h2>Ресторан: {restaurant.name}</h2>
			<h3>Меню:</h3>
			<div className={styles.dishes}>
				{
					restaurant.menu.map((dish, idx) => {
						return <Dish className={styles.dish} key={idx} dish={dish} />
					})
				}
			</div>
			<h4>Отзывы:</h4>
			<div className={styles.reviews}>
				{
					restaurant.reviews.map((rewiew, idx) => {
						return <Review key={idx} rewiew={rewiew} />
					})
				}
			</div>
			<h4>Оставить отзыв:</h4>
			<FormReveiew />
		</div>
	)
}
