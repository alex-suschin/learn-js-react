import { Provider } from "react-redux";
import { RestaurantsPage } from "./pages/restaurants-page/component";
import store from "./redux";

import styles from "./styles/index.scss";

export const App = () => {
	return (
		<Provider store={store}>
			<RestaurantsPage />
		</Provider>
	);
};
