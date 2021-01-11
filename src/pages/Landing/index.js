import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/images/Logo.svg';

function Landing() {
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="logo planning poker"/>

        <main>
          <h1>Reuna sua equipe e tomem as melhores decisões juntos</h1>
        </main>

        <Link to="/room" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>
    </div>
  );
}

export default Landing;