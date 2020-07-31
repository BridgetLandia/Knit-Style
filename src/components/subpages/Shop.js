import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import sapka_colorful from '../../assets/sapka_colorful.jpg';
import sapka_colorful2 from '../../assets/sapka_colorful2.jpg';
import sapka_peach from '../../assets/sapka_peach.jpg';
import zokni_blue from '../../assets/zokni_blue.jpg';
import zokni_feher from '../../assets/zokni_feher.jpg';
import zokni_pink from '../../assets/zokni_pink.jpg';
import elephant from '../../assets/elephant.jpg';
import goose from '../../assets/goose.jpg';
import pig from '../../assets/pig.jpg';
import blanket from '../../assets/blanket.jpg';
import NewShop from './NewShop';

export default function Shop(props) {
	const [ dropdownOpen, setOpen ] = useState(false);

	const toggle = () => setOpen(!dropdownOpen);
	return (
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
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={sapka_colorful} alt="Card image cap" />
							<CardBody>
								<CardTitle>Pasztelszivárvány sapka</CardTitle>
								<CardText>Elkészítési idő körülbelül 2 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={sapka_colorful2} alt="Card image cap" />
							<CardBody>
								<CardTitle>Pasztelszivárvány sapka virággal</CardTitle>
								<CardText>Elkészítési idő körülbelül 2 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={sapka_peach} alt="Card image cap" />
							<CardBody>
								<CardTitle>Téli sapka</CardTitle>
								<CardText>Elkészítési idő körülbelül 2 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className="products_row">
					<h2>Zoknik</h2>
				</Row>
				<Row className="products_row">
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={zokni_feher} alt="Card image cap" />
							<CardBody>
								<CardTitle>Hópehelymintás zokni</CardTitle>
								<CardText>Elkészítési idő körülbelül 2 hét. Elérhető többféle színben..</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={zokni_pink} alt="Card image cap" />
							<CardBody>
								<CardTitle>Mintás női zokni</CardTitle>
								<CardText>Elkészítési idő körülbelül 2 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={zokni_blue} alt="Card image cap" />
							<CardBody>
								<CardTitle>Téli mintás gyerekzokni</CardTitle>
								<CardText>Elkészítési idő körülbelül 2 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className="products_row">
					<h2>Játékok és gyerekholmik</h2>
				</Row>
				<Row className="products_row">
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={goose} alt="Card image cap" />
							<CardBody>
								<CardTitle>Játékliba</CardTitle>
								<CardText>Elkészítési idő körülbelül 3 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={elephant} alt="Card image cap" />
							<CardBody>
								<CardTitle>Elefántos párna</CardTitle>
								<CardText>Elkészítési idő körülbelül 3 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={blanket} alt="Card image cap" />
							<CardBody>
								<CardTitle>Patchwork Takaró</CardTitle>
								<CardText>Elkészítési idő körülbelül 3 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className="products_row">
					<Col md="4">
						<Card className="shop-products">
							<CardImg top width="100%" src={pig} alt="Card image cap" />
							<CardBody>
								<CardTitle>Zöldmalac és Manófalvi Manó</CardTitle>
								<CardText>Elkészítési idő körülbelül 3 hét. Elérhető többféle színben.</CardText>
								<CardText>
									<small className="text-muted">Elérhető megrendelésre</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			<NewShop />
		</div>
	);
}
