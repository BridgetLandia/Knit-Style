import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import biscuit from '../assets/biscuit.svg'

export default function Home() {
    return (
      <div>
        <Container fluid={true} className="mainContent">
        <div id="welcome_text_container">
          <div className="welcome_text" ><h3><span id="bigger">Ü</span>dvözöllek Süti<span><img id="biscuit" src={biscuit}></img></span>Mama Kötödéjében!</h3></div>
          <div className="welcome_text">
          Nézz körül a webshopomban, ahol már 
          elkészített darabjaim közül válogathatsz 
          vagy add le egyedi megrendelésed.
          </div>
          <div className="welcome_text_last">Itt minden Szeretettel, meg némi fonallal készül.</div>
        </div>
        </Container>
        </div>
    )
}
