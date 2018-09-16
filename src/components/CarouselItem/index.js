import React, { PureComponent } from 'react';

class CarouselItem extends PureComponent {
    render() {
        const {isActive, imgSrc, imgAlt, title, content} = this.props;
        
        return (
            <div className={isActive ? 'item active' : 'item'}>
                <div className="container">
                    <a href="register.html"><img style={{width: '100%'}} src={imgSrc} alt={imgAlt} /></a>
                    <div className="carousel-caption">
                    <h4>{title}</h4>
                    <p>{content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselItem;