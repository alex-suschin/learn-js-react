import React from "react";
import styles from "./styles.module.scss";
import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({
	restaurantIds,
	onTabClick,
	activeRestaurantId,
	restaurantTabsPosition,
}) => {
	return (
		<div className={`${styles.restaurantTabs} ${restaurantTabsPosition}`}>
			{restaurantIds.map((restaurantId) => (
				<RestaurantTabContainer
					activeRestaurantId={activeRestaurantId}
					key={restaurantId}
					id={restaurantId}
					onClick={() => onTabClick(restaurantId)}
				/>
			))}
		</div>
	);
};
