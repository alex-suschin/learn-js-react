import React from 'react'
import { RestaurantsPage } from './pages/restourants-page/component';
import { Header } from './components/header/component';
import { Footer } from './components/Footer/component';

export const App = ({ restaurants }) => {
    return <>
        <Header />
        <RestaurantsPage restaurants={restaurants} />
        <Footer />
    </>
};
