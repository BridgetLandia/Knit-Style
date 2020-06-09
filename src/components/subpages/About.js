import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import profil from '../../assets/profil2.jpg'

export default function About() {
    return (
        <div>
        <Container>
            <h1>Rólam</h1>
            <div><img src={profil}></img></div>
        </Container>
        </div>
    )
}
