import React from "react";
import { Dish } from "./component";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/features/entities/dish/selectors";

const DishConatainer = ({ dishId, ...props }) => {
	const dish = useSelector((state) => selectDishById(state, dishId));

	return <Dish {...props} dish={dish} />;
};

export default DishConatainer;
