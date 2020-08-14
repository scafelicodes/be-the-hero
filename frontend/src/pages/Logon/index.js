import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';


import './styles.css';

import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/dog-hero.png';

export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">

                <img src={logoImg} alt="Dog Hero" width="150" />

                    <form>
                        <h1>Faça seu logon</h1>
                        <input placeholder="Sua ID"/>
                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/cadastro">
                            <FiLogIn size={16} color="#e02041" />
                            Não tenho cadastro
                        </Link>
                    </form>

            </section>

            <img src={heroesImg} alt="Heroes" width="350" />
        </div>
    );
}