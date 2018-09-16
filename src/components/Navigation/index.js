import React from 'react';

class Navigation extends React.PureComponent {
    render(){
        return(
            <ul id="topMenu" className="nav pull-right">
                <li><a href="special_offer.html">Specials Offer</a></li>
                <li><a href="normal.html">Delivery</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="#login" role="button" data-toggle="modal" style={{paddingRight: 0}}><span className="btn btn-large btn-success">Login</span></a></li>
            </ul>
        );
    }
}

export default Navigation;