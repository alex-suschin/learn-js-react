import React, { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import styles from "./styles.module.scss";
import Layout from "../../components/layout/component";

export const RestaurantsPage = ({ restaurants }) => {
	const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
	const activeRestaurant = restaurants[activeRestaurantIndex];

	return (
		<Layout>
			<div className={styles.content}>
				<RestaurantTabs
					restaurantTabsPosition={styles.restaurantTabsPosition}
					activeRestaurant={activeRestaurant}
					restaurants={restaurants}
					onTabClick={setActiveRestaurantIndex}
				/>

				{activeRestaurant && (
					<Restaurant restaurant={activeRestaurant} />
				)}
			</div>
		</Layout>
	);
};
