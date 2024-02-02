// Importation des images qui seront présentes dans le tableau d'objets listProjects :
import picturePortfolio from '../assets/praveen-thirumurugan-unsplash.jpg'
import pictureProjectNatureGame from '../assets/cat-keyboard.jpg'

// Tableau d'objets listProjects contenant les informations de mes projets réalisés :
export let listProjects = [
    {
        id: 1,
        title: "Portfolio",
        image: picturePortfolio,
        link: "https://github.com/Marine-Lautissier/Portfolio.git",
        buttonLink: "Cliquez-ici pour accéder au code de mon Porfolio sur Github :D !",
    },
    {
        id: 2,
        title: "Projet NatureGame",
        image: pictureProjectNatureGame,
        link: "https://github.com/Marine-Lautissier/Projet-nature-game-front.git",
        buttonLink: "Cliquez-ici pour accéder au code de mon Projet NatureGame sur Github :D !",
    },
]