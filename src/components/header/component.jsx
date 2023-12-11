import React from "react";
import styles from "./styles.module.scss";
import Button from "../button/component";
import { useTheme } from "../../contexts/theme/hooks";
import ThemeProvider from "../../contexts/theme/component";

export const Header = ({ className }) => {
	const { toggleTheme } = useTheme();
	return (
		<header>
			<h1>GetFood | Ordering food in restaurants</h1>
			<div className={styles.headerBtns}>
				<ThemeProvider>
					<Button onClick={toggleTheme}>ToggleTheme</Button>
				</ThemeProvider>
			</div>
		</header>
	);
};
