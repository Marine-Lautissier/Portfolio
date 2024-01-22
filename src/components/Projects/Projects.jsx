import { Tool, Code, GitCommit, GitPullRequest } from 'react-feather';

import './Projects.css'
import image from "../../assets/praveen-thirumurugan-unsplash.jpg"

function Projects() {
    return (
        <section id="projects">
            <h2>Mes projets</h2>
            <h3>Réalisés</h3>
                <article className='accomplished'>
                    <h4>Portfolio</h4>
                    <img src={image} alt="image-portfolio" />
                    <button>Cliquez-ici pour accéder au code de mon Porfolio sur Github :D !</button>
                </article>
            <h3>En cours</h3>
                <article className='in-progress'>
                    <p><Tool/><Code/><GitCommit/><GitPullRequest/></p>
                    <p>...</p>
                </article>
        </section>
    )
}

export default Projects;

