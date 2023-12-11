import React from "react";
import styles from "./styles.module.scss";
import Button from "../button/component";

export const RestaurantTab = ({ title, onClick, activeRestaurant }) => {
	return (
		<Button
			className={`${styles.tab}  ${
				activeRestaurant.name === title ? styles.tabActive : ""
			}`}
			onClick={onClick}>
			{title}
		</Button>
	);
};
