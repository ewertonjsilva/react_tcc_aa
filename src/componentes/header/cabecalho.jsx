import { MdFastfood, MdMenu } from "react-icons/md";

import './cabecalho.css'; 

function Cabecalho() {
    return(
        <header>
            {/* Logo e navegação     */}
            <nav className="containerNav">
                <div className="menu">
                    <div>
                        <MdFastfood className="icon" id="logo" />        
                        <label for="" id="titulo">BomBurguer</label>
                    </div>                      
                    <div className="menuGrande">
                        <a href="#" className="active">Home</a>                  
                        <a href="./paginas/produtos.html">Produtos</a>
                        <a href="./paginas/cadUsuario.html">Cadastrar</a>
                        <a href="./paginas/contato.html">Contato</a>
                        <a href="./paginas/login.html">Login</a>
                    </div>
                    <div className="menuMobile">
                        <a href="#" onClick={e => e.preventDefault()} className="icon" id="mIco">
                            <MdMenu className="icon" id="menu"/>
                        </a>
                    </div>                    
                </div>  
                <div className="menuMobileExpandidon" id="mostraOpMobile">  
                    <a href="#" className="active">Home</a>                  
                    <a href="./paginas/produtos.html">Produtos</a>
                    <a href="./paginas/cadUsuario.html">Cadastrar</a>
                    <a href="./paginas/contato.html">Contato</a>
                    <a href="./paginas/login.html">Login</a>
                </div>               
            </nav>            
        </header>
    );
}

export default Cabecalho;