import React, { PureComponent } from 'react';
import Toggle from '../Toggle';
import Logo from '../Logo';
import Navigation from '../Navigation';

class Header extends PureComponent {
    render() {
        const { homeUrl, imgSrc, imgAlt } = this.props;
        return (
            <div id="header">
                <div id="logoArea" className="navbar">
                    <Toggle />
                    <div className="navbar-inner">
                        <Logo homeUrl={homeUrl} imgSrc={imgSrc} imgAlt={imgAlt} />
                        <Navigation />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;