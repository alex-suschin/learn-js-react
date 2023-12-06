import React, {useState} from "react";
import {RestaurantTabs} from "../../components/restaurant-tabs/component";
import {Restaurant} from "../../components/restaurant/component";
import styles from "./styles.module.scss";

export const RestaurantsPage = ({restaurants}) => {
	const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
	const activeRestaurant = restaurants[activeRestaurantIndex];

	return (
		<>
			<RestaurantTabs
				restaurantTabsPosition={styles.restaurantTabsPosition}
				activeRestaurant={activeRestaurant}
				restaurants={restaurants}
				onTabClick={setActiveRestaurantIndex}
			/>

			{activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
		</>
	);
};
