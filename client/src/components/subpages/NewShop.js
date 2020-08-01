import React from 'react';
import data from '../../data';

export default function NewShop() {
	return (
		<div className="products">
			{data.products.map((product) => (
				<li>
					<div className="product">
						<a href={'/product/' + product._id}>
							<img className="product-image" src={product.image} alt="product" />
						</a>
						<div className="product-name">
							<a href={'/product/' + product._id}>{product.name}</a>
						</div>
						<div className="product-brand">{product.brand}</div>
						<div className="product-price">${product.price}</div>
						<div className="product-rating">
							{product.rating} Stars ({product.numReiews} Reviews)
						</div>
					</div>
				</li>
			))}
		</div>
	);
}
