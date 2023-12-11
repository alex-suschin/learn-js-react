import React from "react";
import { RestaurantsPage } from "./pages/restourants-page/component";
import styles from "./styles/index.scss";

export const App = ({ restaurants }) => {
	return <RestaurantsPage restaurants={restaurants} />;
};
