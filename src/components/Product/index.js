import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

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
                        <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <FontAwesomeIcon icon={faSearchPlus} /></a> <a className="btn" href="#">Add to <FontAwesomeIcon icon={faCartArrowDown} /></a> <a className="btn btn-primary" href="#">{price}</a></h4>
                    </div>
                </div>
            </li>
        );
    }
}

export default Product;