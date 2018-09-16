import React, { PureComponent } from 'react';

class Toggle extends PureComponent {
    render() {
        return (
            <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</a>
        );
    }
}

export default Toggle;