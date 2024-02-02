import { Tool, Code, GitCommit, GitPullRequest } from 'react-feather';

import './Projects.css';

function Projects({listProjectsAccomplished}) {
    return (
        <section id="projects">
            <h2>Mes projets</h2>
            <h3>Réalisés</h3>
            <div className="article-projects-accomplished">
            {listProjectsAccomplished.map((item) => (
                <article key={item.id} className="accomplished">
                    <h4>{item.title}</h4>
                    <img src={item.image} alt="" />
                    <button><a href={item.link}>{item.buttonLink}</a></button>
                </article>
            ))}
            </div>
            <h3>En cours</h3>
                <article className="in-progress">
                    <p><Tool/><Code/><GitCommit/><GitPullRequest/></p>
                    <p>...</p>
                </article>
        </section>
    )
}

export default Projects;

