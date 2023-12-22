import React from "react";
import styles from "./styles.module.scss";
import ReviewContainer from "../review/container";

const Reviews = ({ reviewIds }) => {
	return (
		<>
			<h4>Отзывы:</h4>
			<div className={styles.reviews}>
				{reviewIds.map((id) => {
					return <ReviewContainer key={id} rewiewId={id} />;
				})}
			</div>
		</>
	);
};

export default Reviews;
