import React from "react";
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectUserById } from "../../redux/features/entities/user/selectors";

const ReviewContainer = ({ reviewId, ...props }) => {
	console.log("reviewId", reviewId);

	const review = useSelector((state) => selectReviewById(state, reviewId));
	const user = useSelector((state) => selectUserById(state, reviewId));

	console.log(review);
	console.log(user);

	return <Review {...props} review={review} />;
};

export default ReviewContainer;
