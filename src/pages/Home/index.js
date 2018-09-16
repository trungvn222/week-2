import React, { PureComponent } from 'react';
import Sidebar from '../../components/Sidebar';
import Products from '../../components/Products';
import Carousel from '../../components/Carousel';
import ShipingBar from '../../components/ShipingBar';

class Home extends PureComponent {
    render() {
        const {lastestProducts, carousel} = this.props;
        const hot = lastestProducts.filter((p) => p.hot || false );
        return (
            <React.Fragment>
                <div id="carouselBlk">
                    <Carousel items={carousel} carouselID="myCarousel" />
                </div>
                <div id="mainBody">
                    <div className="container">
                        <div className="row">
                            <div className="span3">
                                <Sidebar />
                            </div>
                            <div className="span9">
                                <ShipingBar />
                                <h4>Hot</h4>
                                <Products products={hot} />
                                <h4>Latest Products</h4>
                                <Products products={lastestProducts} />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Home;