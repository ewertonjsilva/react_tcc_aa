import React, { useState, useEffect } from 'react';
import { MdFastfood, MdMenu } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

import './cabecalho.css'; 

function Cabecalho({pag}) { 

    const [mobile, setMobile] = useState(false); 
    let navigate = useNavigate();
    const [logado, setLogado] = useState(false);

    function ativaMenu() {
        if (mobile === false) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    } 

    function sair() {
        localStorage.clear(); 
        window.location.reload(true);
        navigate('/');
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setLogado(true);
        }
      }, []);     

    return(
        <header>
            {/* Logo e navegação     */}
            <nav className="containerNav">
                <div className="menu">
                    <div className='logoNome'>
                        <MdFastfood className="icon" id="logo" />        
                        <label for="" id="titulo">BomBurguer</label>
                    </div>                      
                    <div className="menuGrande">
                        <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>                  
                        <Link to='/produtos' className={pag === 'produtos' ? 'active' : ''}>Produtos</Link>
                        <Link to='/cadusuarios' className={pag === 'cadUsu' ? 'active' : ''}>Cadastrar</Link>
                        <Link to='/contato' className={pag === 'contato' ? 'active' : ''}>Contato</Link> 
                        {
                            logado ? <span className='menuSair' onClick={() => sair()}>Sair</span> : <Link to='/login' className={pag === 'login' ? 'active' : ''}>Login</Link>
                        }
                                                
                    </div>
                    <div className="menuMobile">
                        <a href="#" onClick={ativaMenu} className="icon" id="mIco">
                            <MdMenu className="icon" id="menu"/>
                        </a>
                    </div>                    
                </div>  
                <div className={mobile === false ? "menuMobileExpandidon" : "menuMobileExpandidos"} id="mostraOpMobile">  
                        <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>                  
                        <Link to='/produtos' className={pag === 'produtos' ? 'active' : ''}>Produtos</Link>
                        <Link to='/cadusuarios' className={pag === 'cadUsu' ? 'active' : ''}>Cadastrar</Link>
                        <Link to='/contato' className={pag === 'contato' ? 'active' : ''}>Contato</Link>
                        {
                            logado ? <span className='menuSair' onClick={() => sair()}>Sair</span> : <Link to='/login' className={pag === 'login' ? 'active' : ''}>Login</Link>
                        }
                </div>               
            </nav>            
        </header>
    );
}

export default Cabecalho;