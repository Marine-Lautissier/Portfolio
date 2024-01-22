import './Header.css'
import image from "../../assets/growtika-unsplash.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Header() {
    const [text] = useTypewriter({
        words: ['Bienvenue sur mon Portfolio !'],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <header className="introduction-section" style={{ backgroundImage: `url(${image})` }}>
            <h2> {text} <Cursor /> </h2>
            <div className="align-center">
            <p>Je me prénomme Marine Lautissier,</p>
            <p>Développeuse web / web mobile </p>
            <p>Full Stack - spécialisée en <strong className='Policy-React'>React</strong>.</p>
            </div>
        </header>
    )
}

export default Header;
