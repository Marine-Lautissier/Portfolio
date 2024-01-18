import { GitHub, Linkedin, Mail } from 'react-feather';

import './Footer.css'

function Footer() {
    return (
        <footer>
        <h2 id="contact-me">Me contacter</h2>
            <div className="foot-links">
                <ul>
                    <div className="footer-element">
                        <li><a className= "button_foot" href="#">Mail</a></li>
                        <div className="socialIcons">
                        <a href=""><Mail /></a>
                        </div>
                    </div>

                    <div className="footer-element">
                        <li><a className= "button_foot" href="#">Linkedin</a></li>
                        <div className="socialIcons">
                        <a href=""><Linkedin /></a>
                        </div>
                    </div>

                    <div className="footer-element">
                        <li><a className= "button_foot" href="#">Github</a></li>
                        <div className="socialIcons">
                            <a href=""><GitHub /></a>
                        </div>
                    </div>
                </ul>
            </div>
        <p className="rights">Tous droits réservés.</p>
    </footer>
    )
}

export default Footer;
