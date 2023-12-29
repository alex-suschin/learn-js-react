import React from "react";
import styles from "./styles.module.scss";
import Button from "../button/component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/features/entities/restaurant/selectors";

export const RestaurantTab = ({ id, onClick, activeRestaurantId }) => {
	const restaurant = useSelector((state) => selectRestaurantById(state, id));

	if (!restaurant) {
		return null;
	}

	return (
		<Button
			className={`${styles.tab}  ${
				activeRestaurantId === id ? styles.tabActive : ""
			}`}
			onClick={onClick}>
			{restaurant.name}
		</Button>
	);
};
