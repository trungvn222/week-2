import React, { Component } from 'react';
import logo from './assets/img/logo.png';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

/* Data */
import ProductsDataSource from './data/products';
import CarouselData from './data/carousel';

/* assets */
import './assets/libs/fontawsome/css/font-awesome.css';
import './assets/libs/bootstrap/css/bootstrap.min.css';
import './App.css';
import './assets/libs/bootstrap/css/bootstrap-responsive.min.css';


class App extends Component {
    state = {
        home: {
            lastestProducts: ProductsDataSource,
            carousel: CarouselData
        },
        header: {
            homeUrl : 'index.html',
            imgSrc : logo,
            imgAlt : 'Shop'
        }
    };

    render() {
        const { home , header} = this.state;
        return (
        <React.Fragment>
            <Header {...header} />
            <Home {...home} />
            <Footer />
        </React.Fragment>
        );
    }
}

export default App;
