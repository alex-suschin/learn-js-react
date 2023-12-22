import React from "react";
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { useSelector } from "react-redux";
import { Review } from "./component";

const ReviewContainer = ({ reveiwId, ...props }) => {
	console.log("reveiwId", reveiwId);

	const review = useSelector((state) => selectReviewById(state, reveiwId));

	return <Review {...props} review={review} />;
};

export default ReviewContainer;
