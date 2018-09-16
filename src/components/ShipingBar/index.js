import React, { PureComponent } from 'react';
import './assets/css/main.css';

class ShipingBar extends PureComponent {
    render() {
        return (
            <div className="wrapper">
                <div className="margin-area">
                    <div className="dot one">1</div>
                    <div className="dot two">2</div>
                    <div className="dot three">3</div>
                    <div className="dot four">4</div>
                    <div className="progress-bar first" />
                    <div className="progress-bar second" />
                    <div className="progress-bar third" />
                    <div className="message message-1">
                    Picked up
                    <div>
                        <div className="message message-2">Arrived at USPS facility<div>
                            <div className="message message-3">Out for delivery<div>
                                <div className="message message-4">Delivered<div>
                                </div>
                                <div className="status">Your item arrived at our USPS facility in COLUMBUS, OH 43218 on January 6, 2016 at 10:45 pm. The item is currently in transit to the destination.</div>
                                <div className="status code">Here is your tracking code: <a href="#">123456789</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        );
    }
}



export default ShipingBar;