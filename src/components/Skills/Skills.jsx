import './Skills.css'

function Skills() {
    return (
        <section id="skills">
            <h2>Mes compétences</h2>
            <div className="skills-elements">
                <div className="front-element">
                    <h3>Front-end</h3>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"/>HTML</h4>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"/>CSS</h4>
                    <h4 className="skillsTitle"><img className='javascript' src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"/>Javascript</h4>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/>React</h4>
                </div>
                <div className="end-element">
                    <h3>Back-end</h3>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/php/php-icon.svg"/>PHP</h4>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg"/>Laravel</h4>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg"/>Wordpress</h4>
                </div>
                <div className="others-elements">
                    <h3>Autres</h3>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"/>MySQL</h4>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/github/github-icon.svg"/>Github</h4>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"/>Linux</h4>
                    <h4 className="skillsTitle"><img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg"/>Windows</h4>
                </div>
            </div>
        </section>
    )
}

export default Skills;

