# Portfolio  

## Introduction :

Bienvenue sur ce Repository contenant mon Porfolio !  
Mon Portfolio va me permettre de vous exposer mes compétences ainsi que de vous montrer mes projets réalisés et/ou en cours...

## Sommaire :

1. Technologies utilisées,
2. Structure du projet,
3. Fonctionnalités.

## Technologies utilisées :

#### Langages :

- JavaScript,
- JSX,
- CSS.

#### Bibliothèque/Framework :

- REACT (qui est une bibliothèque pour certains, un framework pour d'autres).

#### Gestionnaire de packages :

- NPM.

#### Packages :

- React-DOM.

#### Build Tool :

- Vite.

#### Point d'entrée de l'application :

- index.html.

## Structure du projet :

Le code que j'ai mis en place permettant de réaliser mon Portfolio est structuré de la façon suivante :  

Le dossier `src` contient :  
- le sous-dossier `assets`,  
- le sous-dossier `components`,
- le fichier `index.css`,
- le fichier `main.jsx`.

Le dossier `components` contient des sous-dossiers qui contiennent des fichiers `.jsx` & `.css`. Ces fichiers correspondent aux composants de mon projet.  

- **Composant parent :**
    - App,  
    
- **Composants enfants :**
    - Footer,
    - Header,
    - Navbar,
    - Presentation,
    - Projects,
    - Skills.  

Cette façon de structurer mon code permet, lors de changement de données, de mettre à jour, de façon optimale, juste les composants qui en auront besoin.  

## Fonctionnalités :

- **Section Navbar :**  
    - contient mon Nom et mon Prénom ainsi que les liens internes (document fragment) afin d'accéder directement aux autres sections présentes sur mon Portfolio.

- **Section Header :**
    - contient une image de fond ainsi qu'une introduction.
        - pour apporter de l'effet au titre de mon Header, j'ai utilisé le Hook useTypewriter de 'react-simple-typewriter'.

- **Section Presentation :**
    - contient une brève présentation me concernant.

- **Section Skills :**
    - contient la liste des compétences que j'ai pu acquérir lors de la formation.

- **Section Projects :**
    - contient la liste des projets réalisés & en cours.

- **Section Footer :**
    - contient des liens externes permettant d'accéder à mon mail professionnel, à mon (futur) profil Linkedin et à mon compte Github.  

- **Adaptabilité et Réactivité :**
    - mon Portfolio est adapté à toutes les tailles d'écran.
        - pour ce faire, j'ai mis en place des media queries et j'ai défini les tailles des fonctionnalités.
