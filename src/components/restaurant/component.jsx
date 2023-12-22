import React from "react";
import { Review } from "../review/component";
import FormReveiew from "../form-reveiw/component";
import styles from "./styles.module.scss";
import MenuContainer from "../menu/container";
import ReviewsContainer from "../reviews/container";

export const Restaurant = ({ restaurant }) => {
	console.log("restaurant", restaurant);

	if (!restaurant) {
		return null;
	}

	return (
		<div className={styles.restaurant}>
			<h2>Ресторан: {restaurant.name}</h2>
			<MenuContainer restaurantId={restaurant.id} />
			<ReviewsContainer restaurantId={restaurant.id} />
			{/* <h4>Отзывы:</h4>
			<div className={styles.reviews}>
				{restaurant.reviews.map((rewiew, idx) => {
					return <Review key={idx} rewiew={rewiew} />;
				})}
			</div> */}
			<h4>Оставить отзыв:</h4>
			<FormReveiew />
		</div>
	);
};
