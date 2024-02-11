// Importation de React depuis React :
import React from 'react';

import './Presentation.css';

function Presentation() {
    return (
        <section id="presentation">
            <h2>Me découvrir</h2>
            <p>Dans le cadre d'une reconversion professionnelle, j'ai effectué une formation dans le but de devenir développeuse web / web mobile et de me spécialiser en <img className='img-presentation' src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"/> </p>
            <p>J'ai eu la possibilité de me former en <strong>HTML, CSS, Javascript, PHP, React, Laravel et MySQL</strong> à l'aide de nombreux exercices et de mises en situation professionnelle.</p>
            <p>J'ai pu ainsi découvrir le milieu merveilleux du développement web !</p>
            <p>Je trouve tous ces langages passionnants et c'est pourquoi je souhaite en faire mon métier !</p>
        </section>
    )
}

export default Presentation;

