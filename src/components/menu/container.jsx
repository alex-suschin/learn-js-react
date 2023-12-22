import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantDishIds } from "../../redux/features/entities/restaurant/selectors";
import Menu from "./component";

const MenuContainer = ({ restaurantId, ...props }) => {
	const restaurantDishIds = useSelector((state) =>
		selectRestaurantDishIds(state, restaurantId)
	);
	return <Menu {...props} dishIds={restaurantDishIds} />;
};

export default MenuContainer;
