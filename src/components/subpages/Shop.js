import React from 'react'
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import sapka_colorful from '../../assets/sapka_colorful.jpg'
import sapka_colorful2 from '../../assets/sapka_colorful2.jpg'
import sapka_peach from '../../assets/sapka_peach.jpg'
import zokni_blue from '../../assets/zokni_blue.jpg'
import zokni_feher from '../../assets/zokni_feher.jpg'
import zokni_pink from '../../assets/zokni_pink.jpg'
import elephant from '../../assets/elephant.jpg'
import goose from '../../assets/goose.jpg'
import pig from '../../assets/pig.jpg'
import blanket from '../../assets/blanket.jpg'

export default function Shop() {
    return (
        <div>
        <Container>
            <Row>
              <h1>Shop</h1>
            </Row>
            <Row className="products_row">
              <Col md="4">
               <Card className="shop-products">
                 <CardImg top width="100%" src={sapka_colorful} alt="Card image cap" />
                  <CardBody>
                     <CardTitle>Sapka</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                     <CardTitle>Sapka</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                     <CardTitle>Sapka</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                 <CardImg top width="100%" src={zokni_feher} alt="Card image cap" />
                  <CardBody>
                     <CardTitle>Zokni</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                     <CardTitle>Zokni</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                     <CardTitle>Zokni</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText>
                        <small className="text-muted">Elérhető megrendelésre</small>
                       </CardText>
                  </CardBody>
                </Card>
               </Col>
              </Row>
              <Row className="products_row">
               <h2>Játékok</h2>
               </Row>
              <Row className="products_row">
               <Col md="4">
               <Card className="shop-products">
                 <CardImg top width="100%" src={goose} alt="Card image cap" />
                  <CardBody>
                     <CardTitle>Zokni</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                     <CardTitle>Zokni</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                     <CardTitle>Zokni</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
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
                     <CardTitle>Zokni</CardTitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText>
                        <small className="text-muted">Elérhető megrendelésre</small>
                       </CardText>
                  </CardBody>
                </Card>
               </Col>
            </Row>
        </Container>
        </div>
    )
}
