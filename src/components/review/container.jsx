import React from "react";
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectUserById } from "../../redux/features/entities/user/selectors";

const ReviewContainer = ({ reviewId, ...props }) => {
	const review = useSelector((state) => selectReviewById(state, reviewId));
	const usersIds = useSelector((state) => selectUserById(state, reviewId));
	const userId = review.userId;

	return (
		<Review
			{...props}
			review={review}
			usersIds={usersIds}
			userId={userId}
		/>
	);
};

export default ReviewContainer;
