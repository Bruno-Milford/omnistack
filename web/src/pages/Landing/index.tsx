import React from 'react';
import { Link } from 'react-router-dom';

//Imagens
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

//Icones
import stydyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study"><img src={stydyIcon} alt="Estudar"/>Estudar</Link>
                    <Link to="/give-classes" className="give-classes"><img src={giveClassesIcon} alt="Dar aulas"/>Dar Aulas</Link>
                </div>
                <span className="total-connections">Total de 200 conexões realizadas <img src={purpleHeartIcon} alt="Coração roxo"/></span>
            </div>
        </div>
    );
}

export default Landing;
