import React from 'react'
import styles from './styles.module.scss'

export const Review = ({ rewiew }) => {
	return (
		<div className={styles.review} key={rewiew.id}>
			<h4>Имя: {rewiew.user}</h4>
			<p className={styles.reviewsText}>{rewiew.text}</p>
		</div>
	)
}
