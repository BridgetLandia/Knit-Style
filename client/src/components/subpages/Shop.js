import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import sapka_colorful from '../../assets/sapka_colorful.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';

import NewShop from './NewShop';

export default function Shop(props) {
	const [ dropdownOpen, setOpen ] = useState(false);
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts());
	}, []);

	const toggle = () => setOpen(!dropdownOpen);
	return loading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{error}</div>
	) : (
		<div>
			<Container>
				<Row id="shop_title">
					<Col sm="12" md={{ size: 2, offset: 5 }}>
						<h1>Shop</h1>
					</Col>
				</Row>
				<ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle caret>Válassz Kategóriát</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header>Kötés</DropdownItem>
						<DropdownItem>Sapkák</DropdownItem>
						<DropdownItem>Zoknikn</DropdownItem>
						<DropdownItem divider />
						<DropdownItem header>Patchwork</DropdownItem>
						<DropdownItem>Takarók</DropdownItem>
						<DropdownItem divider />
						<DropdownItem header>Horgolás</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
				<Row className="products_row">
					<h2>Sapkák</h2>
				</Row>
				<Row className="products_row">
					{products.map((product) => (
						<Col md="4">
							<Card className="shop-products">
								<CardImg top width="100%" src={product.image} alt="Card image cap" />
								<CardBody>
									<CardTitle>{product.name}</CardTitle>
									<CardText>Elkészítési idő körülbelül 2 hét. Elérhető többféle színben.</CardText>
									<CardText>
										<small className="text-muted">Elérhető megrendelésre</small>
									</CardText>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<NewShop />
		</div>
	);
}
