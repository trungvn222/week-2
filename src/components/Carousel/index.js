import React, { PureComponent } from 'react';
import CarouselItem from '../CarouselItem';



class Carousel extends PureComponent {
    render() {
        const {items, carouselID} = this.props;
        
        return (
            <div id={carouselID}  className="carousel slide">
                <div className="carousel-inner">
                    {
                        items.map( (item, index) => <CarouselItem key={index} {...item} isActive={ !index } /> )
                    }
                </div>
                <a className="left carousel-control" href={'#' + carouselID}  data-slide="prev">&lsaquo;</a>
			    <a className="right carousel-control" href={'#' + carouselID}  data-slide="next">&rsaquo;</a>
            </div>
        );
    }
}



export default Carousel;