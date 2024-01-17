import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
        <h2>Marine Lautissier</h2>
        <div className="nav-links">
            <ul>
                <li><a className = "button_nav" href="#presentation">Me découvrir</a></li>
                <li><a className = "button_nav" href="#">Mes compétences</a></li>
                <li><a className = "button_nav" href="#">Mes projets</a></li>
                <li><a className = "button_nav" href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;
