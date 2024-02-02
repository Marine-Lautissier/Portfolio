import { GitHub, Linkedin, Mail } from 'react-feather';

import './Footer.css'

function Footer() {
    return (
        <footer>
        <h2 id="contact-me">Me contacter</h2>
            <div className="foot-links">
                <ul>
                    <div className="footer-element">
                        <li><a className= "button_foot" href="mailto:marine.lautissier@protonmail.com">Mail</a></li>
                        <div className="socialIcons">
                        <a href="mailto:marine.lautissier@protonmail.com"><Mail /></a>
                        </div>
                    </div>

                    <div className="footer-element">
                        <li><a className= "button_foot" href="#">Linkedin</a></li>
                        <div className="socialIcons">
                        <a href=""><Linkedin /></a>
                        </div>
                    </div>

                    <div className="footer-element">
                        <li><a className= "button_foot" href="https://github.com/Marine-Lautissier">Github</a></li>
                        <div className="socialIcons">
                            <a href="https://github.com/Marine-Lautissier"><GitHub /></a>
                        </div>
                    </div>
                </ul>
            </div>
        <p className="rights">Tous droits réservés.</p>
    </footer>
    )
}

export default Footer;
