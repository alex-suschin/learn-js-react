import React from "react";
import styles from "./styles.module.scss";
import { useTheme } from "../../contexts/theme/hooks";
import classNames from "classnames";

const Button = ({ children, onClick, disabled, className }) => {
	const { theme } = useTheme();
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={classNames(className, {
				[styles.light]: theme === "light",
				[styles.dark]: theme === "dark",
			})}>
			{children}
		</button>
	);
};

export default Button;
