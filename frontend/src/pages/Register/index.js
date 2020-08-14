import  React  from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';      

import logoImg from '../../assets/logo.png';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Dog Hero" width="150" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude cãezinhos a encontrarem um novo lar.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>

                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input placeholder="E-mail" />
                    <input placeholder="WhatsApp" />
                    
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width:80 }} />
                    </div>
                    
                    <button className="button">Cadastrar</button>
                </form> 
            </div>
        </div>
    );
}