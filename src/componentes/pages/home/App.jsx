import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood } from "react-icons/md";

import Cabecalho from "../../header/cabecalho";
import Rodape from '../../footer/rodape'; 
import CardProd from '../produtos/cardproduto';
import api from '../../services/api'; 

import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import promo1 from '../../../imagens/promo1.png'; 
import promo2 from '../../../imagens/promo2.png';
import promo3 from '../../../imagens/promo3.png';
import promo4 from '../../../imagens/promo4.png';

import local from '../../../imagens/local.jpg'; 

import prod1 from '../../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../../imagens/temp/lanche1.jpg';
import prod4 from '../../../imagens/temp/suco2.jpg';
import prod5 from '../../../imagens/temp/suco-laranja.jpg';
import prod6 from '../../../imagens/temp/sorvete.jpg';

function App() {

    const [produtos, setProdutos] = useState([]);

    async function listaProdutos() {
        try {
            const response = await api.get('/produtoshome'); 
            setProdutos(response.data.message); 
        } catch (error) {
            alert(error);
        }                
    }

    useEffect(() => {        
        listaProdutos();        
    }, []);     
  return (
    <div className="App">
        <Cabecalho pag={'home'} />
        <Slider />

        <main className="principal">
            {/* Info local */}
            <img className="imagemLocal" src={local} alt="Imagem do local" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas! Hic quasi consequuntur quas numquam ullam fuga voluptas...</p>
        </main>

        <div className="tipos">
            {/* <!-- Tipos de produto --> */}

            <MdLunchDining className="tipo" />
            <MdLocalBar className="tipo" />
            <MdDining className="tipo" />
            <MdIcecream className="tipo" />
            <MdFastfood className="tipo" />
            
        </div>

        <div className="produtos">
            {
                produtos.map(prd => {
                    return <CardProd prd={prd} />
                })
            } 
        </div>

        <Rodape />

    </div>
  );
}
/* https://www.youtube.com/watch?v=Kyk_lPWCM3s */
function Slider() {
    return(
        <Carousel className="slider" autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false} showStatus={false}>
            <div>
                <img src={promo1} alt="Promo????o 1" />
            </div>
            <div>
                <img src={promo2} alt="Promo????o 2" />
            </div>
            <div>
                <img src={promo3} alt="Promo????o 3" />
            </div>
            <div>
                <img src={promo4} alt="Promo????o 4" />
            </div>            
        </Carousel>
    )
}

export default App;
