import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import './styles.css';   

import logoImg from '../../assets/logo.png';


export default function Profile (){
    return(
        <div className="profile-container">
            <header>

                <img src={logoImg} alt="Dog Hero" width="150" /> 

                <span>Bem vinda, APAD!</span>   

                <Link className="button" to="/abrigos/new">
                    {/* <FiArrowLeft size={16} color="#e02041" /> */}
                    Cadastrar novo abrigo
                </Link>

                <button type="button">
                    <FiPower size={18} color="e02041" />
                </button>

            </header>
        </div>
    );
}