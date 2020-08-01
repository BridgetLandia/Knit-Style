import React from 'react';

export default function productDetails() {
	return (
		<div className="details">
			<div className="details-image">
				<img src={product.image} alt="product" />
			</div>
			<div className="details-info">
				<ul>
					<li>
						<h4>{product.name}</h4>
					</li>
					<li>{product.rating}</li>
					<li>
						Price: <b>${product.price}</b>
					</li>
					<li>
						Description:
						<div>{product.description}</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
