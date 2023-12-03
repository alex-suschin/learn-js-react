import React from 'react'
import { RestaurantsPage } from './pages/restourants-page/component';
import { Header } from './components/header/component';
import { Footer } from './components/Footer/component';
import styles from './styles/index.scss'

export const App = ({ restaurants }) => {
    return <>
        <Header />
        <div className='content'>
            <RestaurantsPage restaurants={restaurants} />
        </div>
        <Footer />
    </>
};
