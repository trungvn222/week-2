import React, { PureComponent } from 'react';
import Product from '../Product';

class Products extends PureComponent {
    
    render() {
        const {products} = this.props;
        return (
            <ul className="thumbnails">
            {
                products.map((p,i) => <Product key={p.id} {...p} />)
            }
            </ul>
        );
    }
}

export default Products;