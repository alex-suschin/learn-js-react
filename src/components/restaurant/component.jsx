import React from "react";
import { Review } from "../review/component";
import FormReveiew from "../form-reveiw/component";
import styles from "./styles.module.scss";
import MenuContainer from "../menu/container";
import ReviewsContainer from "../reviews/container";

export const Restaurant = ({ restaurant }) => {
	if (!restaurant) {
		return null;
	}

	return (
		<div className={styles.restaurant}>
			<h2>Ресторан: {restaurant.name}</h2>
			<MenuContainer restaurantId={restaurant.id} />
			<ReviewsContainer restaurantId={restaurant.id} />
			<h4>Оставить отзыв:</h4>
			<FormReveiew />
		</div>
	);
};
