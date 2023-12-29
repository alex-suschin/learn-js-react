import React from "react";
import styles from "./styles.module.scss";

export const Review = ({ review, usersIds, userId }) => {
	return (
		<div className={styles.review} key={review.id}>
			<h4>Имя: {usersIds[userId].name}</h4>
			<p className={styles.reviewsText}>{review.text}</p>
		</div>
	);
};
