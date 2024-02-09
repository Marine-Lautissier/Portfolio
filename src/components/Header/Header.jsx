// Importation de React depuis React :
import React from 'react';

import './Header.css';
import image from "../../assets/office-desk.jpg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Header() {
    const [text] = useTypewriter({
        words: ['Bienvenue sur mon Portfolio !'],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <header className="introduction-section">
            <h2> {text} <Cursor /> </h2>
            <img src={image} alt="image-header"/>
            <div className="align-center">
                <p>Je me prénomme Marine Lautissier,</p>
                <p>Développeuse web / web mobile </p>
                <p>Full Stack - spécialisée en <strong className='Policy-React'>React</strong>.</p>
            </div>
        </header>
    )
}

export default Header;
