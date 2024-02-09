// Importation de React depuis React :
import React from 'react';

// Importation de tous les composants enfants du composant App.jsx :
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Presentation from '../Presentation/Presentation';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

// Importation du tableau d'objets listProjects :
import {listProjects} from '../../data/listProjects';

// Importation du css :
import './App.css';


function App() {
  return (
    <div className='main'>
      <Navbar />
      <Header />
      <Presentation />
      <Skills />
      <Projects listProjectsAccomplished={listProjects} />
      <Footer />
    </div> 
  )
}

export default App;
