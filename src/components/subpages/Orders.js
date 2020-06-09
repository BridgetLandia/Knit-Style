import React from 'react'
import sheep from '../../assets/sheep.svg'
import pulover from '../../assets/pulover.jpg'
import baby from '../../assets/baby.jpg'

export default function Orders() {
    return (
        <div>
            <div id="order_container">
                <h3>Egyedi Megrendelések</h3>
            <div>
             <div>
                <img className="order_img" src={baby}></img>
                <img className="order_img" src={pulover}></img>
            </div>
                    
                    <div><p>Ha valami igazán különlegessel szeretnéd meglepni babát 
                    váró ismerőseid vagy éppen magadat, állok rendelkezésedre.
                    Bármilyen ötlettel is fordulj hozzám, megpróbálom azt életre kelteni.
                    <ul>
                    <li>Egyedi játékok</li>
                    <li>Kisbaba holmik</li>
                    <li>Meseszép kötött pulcsik</li>
                    </ul>
                    </p></div>
                </div>
            <img id="img_sheep" src={sheep}></img>
            </div>
        </div>
    )
}
