import React from "react";
import styles from "./styles.module.scss";
import Button from "../button/component";

export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
	return (
		<div className={styles.counter}>
			<Button
				className={styles.button}
				onClick={decrement}
				disabled={value <= min}>
				-
			</Button>
			{/* <input type="text" placeholder='Кол-во' defaultValue="0" value={value} /> */}
			<span className={styles.value}>{value}</span>
			<Button
				className={styles.button}
				onClick={increment}
				disabled={value >= max}>
				+
			</Button>
		</div>
	);
};
