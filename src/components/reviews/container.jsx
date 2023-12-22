import React from "react";
import Reviews from "./component";
import { useSelector } from "react-redux";
import { selectReviewIds } from "../../redux/features/entities/review/selectors";

const ReviewsContainer = ({ restaurantId, ...props }) => {
	const restaurantReviewIds = useSelector((state) =>
		selectReviewIds(state, restaurantId)
	);
	console.log(restaurantReviewIds);
	return <Reviews {...props} reviewIds={restaurantReviewIds} />;
};

export default ReviewsContainer;
