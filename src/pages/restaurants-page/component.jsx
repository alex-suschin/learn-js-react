import React, { useState } from "react";
import styles from "./styles.module.scss";
import Layout from "../../components/layout/component";
import { RestaurantContainer } from "../../components/restaurant/container";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";

export const RestaurantsPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState(null);

	return (
		<Layout>
			<div className={styles.content}>
				<RestaurantTabsContainer
					restaurantTabsPosition={styles.restaurantTabsPosition}
					activeRestaurantId={activeRestaurantId}
					onTabClick={setActiveRestaurantId}
				/>

				{activeRestaurantId && (
					<RestaurantContainer restaurantId={activeRestaurantId} />
				)}
			</div>
		</Layout>
	);
};
