import React from "react";
import { Header } from "../header/component";
import styles from "./styles.module.scss";
import { Footer } from "../footer/component";
import ThemeProvider from "../../contexts/theme/component";

const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<div className={styles.root}>
				<Header className={styles.header} />
				<main>{children}</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default Layout;
