// Importation de React depuis React :
import React from 'react';

import './Navbar.css';
import { Menu } from 'react-feather';
import { useEffect, useState } from 'react';

function Navbar() {
    /*
    Utilisation du Hook d'état useState :
    -> le destructuring, permet de créer :
    - une variable qui contient la valeur initiale du state,
    &
    - une fonction qui permet de changer la valeur de la variable de state en fournissant en argument la nouvelle valeur.
    */
    const [checkWidth, setCheckWidth] = useState(window.innerWidth);
    const [toggleNav, setToggleNav] = useState(false);

    // Fonction fléchée qui permet la mise à jour de la largeur de la fenêtre au moment où celle-ci est appelée.
    const checkFunction = () => {
        setCheckWidth(window.innerWidth);
    };

    // Fonction fléchée qui permet la modification de la valeur de la variable toggleNav.
    const toggleFunction = () => {
        setToggleNav(!toggleNav);
    };

    /*
    Utilisation du Hook d'effet useEffect :
    - la fonction checkFunction est appelée lors de chaque redimensionnement de la fenêtre,
    - le return assure que l'écouteur d'évènements est retiré lors du démontage du composant.
    */
    useEffect(() => {
        // ajout d'un écouteur d'évènement à window :
        window.addEventListener('resize', checkFunction);

        return() => {
        // suppression de l'écouteur d'évènement lors du démontage du composant :
            window.removeEventListener('resize', checkFunction)
        }
    }, []);

    return (
        <>
        {checkWidth < 978 && (
        <button className='button_icon' onClick={toggleFunction}>
            <p><Menu/></p>
        </button>
        )}
        <nav className={toggleNav ? "show-nav nav-links open" : "navbar"}>
            <h2>Marine Lautissier</h2>
            <div className="nav-links">
                <ul>
                    <li><a className = "button_nav" href="#presentation">Me découvrir</a></li>
                    <li><a className = "button_nav" href="#skills">Mes compétences</a></li>
                    <li><a className = "button_nav" href="#projects">Mes projets</a></li>
                    <li><a className = "button_nav" href="#contact-me">Contact</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
