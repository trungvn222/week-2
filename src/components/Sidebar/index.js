import React, { PureComponent } from 'react';
import CartIcon from '../../assets/img/ico-cart.png';

class Sidebar extends PureComponent {
    render() {
		
        return (
			<div id="sidebar" >
				<div className="well well-small"><a id="myCart" href="product_summary.html"><img src={CartIcon} alt="cart" />3
      Items in your cart <span className="badge badge-warning pull-right">$155.00</span></a></div>
				<ul id="sideManu" className="nav nav-tabs nav-stacked">
					<li className="subMenu open"><a> ELECTRONICS [230]</a>
						<ul>
							<li><a className="active" href="products.html"><i className="icon-chevron-right" />Cameras (100) </a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Computers, Tablets &amp; laptop (30)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Mobile Phone (80)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Sound &amp; Vision (15)</a></li>
						</ul>
					</li>
					<li className="subMenu"><a> CLOTHES [840] </a>
						<ul style={{ display: 'none' }}>
							<li><a href="products.html"><i className="icon-chevron-right" />Women's Clothing (45)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Women's Shoes (8)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Women's Hand Bags (5)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Men's Clothings (45)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Men's Shoes (6)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Kids Clothing (5)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Kids Shoes (3)</a></li>
						</ul>
					</li>
					<li className="subMenu"><a>FOOD AND BEVERAGES [1000]</a>
						<ul style={{ display: 'none' }}>
							<li><a href="products.html"><i className="icon-chevron-right" />Angoves (35)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Bouchard Aine &amp; Fils (8)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />French Rabbit (5)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Louis Bernard (45)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />BIB Wine (Bag in Box) (8)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Other Liquors &amp; Wine (5)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Garden (3)</a></li>
							<li><a href="products.html"><i className="icon-chevron-right" />Khao Shong (11)</a></li>
						</ul>
					</li>
					<li><a href="products.html">HEALTH &amp; BEAUTY [18]</a></li>
					<li><a href="products.html">SPORTS &amp; LEISURE [58]</a></li>
					<li><a href="products.html">BOOKS &amp; ENTERTAINMENTS [14]</a></li>
				</ul>
				
			</div>

        );
    }
}

export default Sidebar;