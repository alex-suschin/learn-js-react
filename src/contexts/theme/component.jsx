import React, { useCallback, useState } from "react";
import { DEFAULT_THEME } from "./constants";
import { ThemeContext } from "./context";

const ThemeProvider = ({ children, defaultTheme = DEFAULT_THEME }) => {
	const [theme, setTheme] = useState(defaultTheme);

	const toggleTheme = useCallback(() => {
		setTheme((currentTheme) =>
			currentTheme === "light" ? "dark" : "light"
		);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
