import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/features/entities/restaurant/selectors";
import { RestaurantTab } from "./component";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
	const restaurant = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);
	return <RestaurantTab {...props}>{restaurant?.name}</RestaurantTab>;
};
