import React from 'react'
import { Container } from 'reactstrap';
import profil from '../../assets/profil2.jpg'

export default function About() {
    return (
        <div>
        <Container id="about_container" fluid={true}>
            <div id="about_title">
            <h3>Rólam</h3>
            </div>
            <div id="about_wrapper">
            <div id="about_text">
            <div id="profile_img_wrapper">
            <img id="profile_img" alt="profile" src={profil}></img>
            </div>
            <div id="about_text_wrapper">
                <div>
                <p>
                1962-ben születtem, Sátoraljaújhelyen. Nagycsaládból származom, ahol a kreatív tevékenység mindig jelen volt. Művészi érzékemet édesapámtól örököltem, aki a mai napig ikonfestőként is tevékenykedik a lelkészi hivatása mellett.</p>
                </div>
                <p>A kötéssel az egyetemi évek alatt ismerkedtem meg, egy kedves évfolyamtársam az unalmasabb közgazdaságtan előadások alatt rendszeresen a pad alatt kötött, horgolt.
                A foltmozaikvarrás a másik kedvenc elfoglaltságom, rendkívül izgalmasnak találom, ahogy a megunt, elhasznált ruhák új életre kelnek egy-egy falvédő vagy takaró formájában.
                </p>
                <p>Az elmúlt 30 évben számtalan ruha, jelmez, takaró, párna és egyéb, háztartásban használható termék került ki a kezeim közül. Családom apraja-nagyja hordja, használja az általam készített dolgokat, ami számomra hatalmas öröm.
                </p>
                <p>Szeretném, ha a kézzel készített termékeim szélesebb körben is ismertté válnának.
                Amennyiben megvalósíthatatlannak hitt ötlete, igénye támadt akár kötött, horgolt, akár varrott vagy patchwork termék tekintetében, kérem, keressen bizalommal, és megvalósítjuk!
                </p>
                </div>
            </div>
            </div>
        </Container>
        <div class="container">
        <div class="lamp">
        <div class="stand"></div>
         <div class="bulb"></div>
        <input type="checkbox"></input>
        </div>
        </div>
        </div>
    )
}
