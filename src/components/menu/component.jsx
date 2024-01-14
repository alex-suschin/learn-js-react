import React from "react";
import styles from "./styles.module.scss";
import DishConatainer from "../dish/container";

const Menu = ({ dishIds }) => {
	return (
		<>
			<h3>Меню:</h3>
			<div className={styles.menu}>
				{dishIds.map((id) => (
					<DishConatainer key={id} dishId={id} />
				))}
			</div>
		</>
	);
};

export default Menu;
