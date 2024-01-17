import './Header.css'
import image from "../../assets/growtika-unsplash.jpg"
function Header() {
    return (
        <header className="introduction-section" style={{ backgroundImage: `url(${image})` }}>
            <h2>Bienvenue sur mon Portfolio !</h2>
            <div className="align-center">
            <p>Je me prénomme Marine Lautissier,</p>
            <p>Développeuse web / web mobile </p>
            <p>Full Stack - spécialisée en <strong className='Policy-React'>React</strong>.</p>
            </div>

        </header>
    )
}

export default Header;
