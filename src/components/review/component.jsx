import React from "react";
import styles from "./styles.module.scss";

export const Review = ({ review }) => {
	console.log(review);
	return (
		<div className={styles.review} key={review.id}>
			<h4>Имя: {review.userId}</h4>
			<p className={styles.reviewsText}>{review.text}</p>
		</div>
	);
};
