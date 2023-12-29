import React from "react";
import Reviews from "./component";
import { useSelector } from "react-redux";
import { selectRestaurantReviewIds } from "../../redux/features/entities/restaurant/selectors";

const ReviewsContainer = ({ restaurantId, ...props }) => {
	const restaurantReviewIds = useSelector((state) =>
		selectRestaurantReviewIds(state, restaurantId)
	);
	console.log(restaurantReviewIds);
	return <Reviews {...props} reviewIds={restaurantReviewIds} />;
};

export default ReviewsContainer;
