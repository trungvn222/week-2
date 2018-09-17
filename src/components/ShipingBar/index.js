import React, { PureComponent } from 'react';
import './assets/css/main.css';

class ShipingBar extends PureComponent {
    render() {
        return (
            <div className="grid_1">
                <div className="col-md-3">
                    <div className="box2">
                        <ul className="list1">
                            <i className="lock"> </i>
                            <li className="list1_right"><p>Upto 5% Reward on your shipping</p></li>
                            <div className="clearfix"> </div>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box3">
                        <ul className="list1">
                            <i className="clock1"> </i>
                            <li className="list1_right"><p>Easy Extended Returned</p></li>
                            <div className="clearfix"> </div>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box4">
                        <ul className="list1">
                            <i className="vehicle"> </i>
                            <li className="list1_right"><p>Free Shipping on order over 99 $</p></li>
                            <div className="clearfix"> </div>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box5">
                        <ul className="list1">
                            <i className="dollar"> </i>
                            <li className="list1_right"><p>Delivery Schedule Spread Cheer Time</p></li>
                            <div className="clearfix"> </div>
                        </ul>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}



export default ShipingBar;