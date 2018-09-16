import React, { PureComponent } from 'react';

class Product extends PureComponent {
    render() {
        const { url, thumbnail, name, description, price } = this.props;
        return (
            <li className="span3">
                <div className="thumbnail">
                    <a href={url}><img src={thumbnail} alt={name} /></a>
                    <div className="caption">
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">{price}</a></h4>
                    </div>
                </div>
            </li>
        );
    }
}

export default Product;