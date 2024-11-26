import React, { useState, useEffect } from "react";
import MenuBar from "./components/MenuBar";
import './Home.css'
import CarImg from './assets/Gemini_Generated_Image_lqgkx1lqgkx1lqgk-removebg-preview.png'
import avatar1 from './assets/image0_0 (1).jpg'
import avatar2 from './assets//image0_0 (2).jpg'
import avatar3 from './assets/image0_0 (3).jpg'
import avatar4 from './assets/image0_0.jpg'
import avatar5 from './assets/perfil1.jpg'
import avatar6 from './assets/perfil2.jpg'
import img_parceiro_1 from './assets/download-removebg-preview (1).png'
import img_parceiro_2 from './assets/download-removebg-preview.png'
import img_parceiro_3 from './assets/download__1_-removebg-preview.png'
import img_parceiro_4 from './assets/download__3_-removebg-preview.png'
import Avalizacoes from './components/Avaliacoes';
import Creditos from "./components/Creditos";

function Home(){
    

    return(
        <div className="Home">
            <MenuBar/>
            <br/>
            <br/>
            <section className="PagBody_1">
                <div className="ItensPrinc">
                    <h1 style={{fontSize: "5vh"}}>
                        <span style={{color: "#f9f9f9"}}>Envio </span>
                        <span style={{color: "#D89E1F"}}>rápido</span>
                        <span style={{color: "#f9f9f9"}}> e </span>
                        <span style={{color: "#D89E1F"}}>seguro </span>
                        <span style={{color: "#f9f9f9"}}> para todo o país.</span>
                        <p style={{fontSize: "3vh", color: "#c9c9c9", marginTop: "2vh"}}>Descubra o futuro das entregas com a ShippingEx! Com tecnologia autônoma, garantimos eficiência, segurança e rapidez para levar suas encomendas onde for preciso. Cada entrega é monitorada em tempo real, unindo inovação e praticidade.</p>
                    </h1>
                    <img src={CarImg} alt="Veiculo Autonomo" className="logo"/>
                </div>
            </section>
            <section className="PagBody_2">
                <h1>Calcule o Frete de Sua Encomenda</h1>
                <div className="PainelCalculadora">
                    <div className="Infos">
                        <div className="InfoEnd">
                            <h2>Informações de Endereço</h2>
                            <div class="label-float">
                                <input type="text" placeholder=" " required/>
                                <label>CEP Remetente</label>
                            </div>
                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="a_black">Descobrir CEP</a>
                            <div class="label-float">
                                <input type="text" placeholder=" " required/>
                                <label>CEP Destinatário</label>
                            </div>
                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="a_black">Descobrir CEP</a>
                        </div>
                        <div className="InfoPacote">
                            <h2>Informações do Pacote</h2>
                            <div className="InfoPacote_2">
                                <div class="label-float">
                                    <input type="text" placeholder=" " required/>
                                    <label>Largura(cm)</label>
                                </div>
                                <div class="label-float">
                                    <input type="text" placeholder=" " required/>
                                    <label>Altura(cm)</label>
                                </div>
                                <div class="label-float">
                                    <input type="text" placeholder=" " required/>
                                    <label>Comprimento(cm)</label>
                                </div>
                            </div>
                            <div className="InfoPacote_3">
                                <div class="label-float">
                                    <input type="text" placeholder=" " required/>
                                    <label>Peso(Kg)</label>
                                </div>
                                <div class="label-float">
                                    <input type="text" placeholder=" " required/>
                                    <label>Valor Declarado(R$)</label>
                                </div>
                            </div>
                            <p>*O valor do frete pode sofrer <strong>alterações</strong>. Verifique antes de finalizar o pagamento.</p>
                        </div>
                    </div>
                    <div className="CalOps">
                        <button className="BtnLimpar"><strong>Limpar</strong></button>
                        <button className="BtnCalcular"><strong>Calcular</strong></button>
                    </div>
                </div>
            </section>
            <section className="PagBody_4">
                <p>A frota de veículos da <strong>ShippingEx</strong> é composta exclusivamente por modelos <strong>autônomos</strong> e totalmente <strong>elétricos</strong>,
                     reafirmando o compromisso da empresa com a <strong>sustentabilidade</strong>. Esses veículos inovadores utilizam fontes
                      de energia <strong>renovável</strong> e altamente econômicas, contribuindo para a preservação ambiental e reduzindo
                       significativamente os custos operacionais.</p><br/>
                <p>Equipados com a mais avançada tecnologia de ponta, os veículos são projetados para garantir entregas
                     de maneira <strong>rápida</strong>, <strong>eficiente</strong> e <strong>segura</strong>. Sensores inteligentes e sistemas de monitoramento em <strong>tempo
                     real</strong> permitem que eles analisem e reajam ao ambiente constantemente, prevenindo acidentes e otimizando
                       os trajetos para minimizar o tempo de entrega.</p>
            </section>
            <section className="PagBody_3">
                <h2>Avaliações</h2>
                <div className='avaliacoes'>
                    <Avalizacoes avatar={avatar1} nome='Lucas Almeida'>"O serviço foi excelente desde o início. A comunicação clara e o acompanhamento de todo o processo me deram muita confiança. A entrega foi rápida e o produto chegou em perfeitas condições. Recomendo a todos que buscam eficiência e qualidade!"</Avalizacoes>
                    <Avalizacoes avatar={avatar4} nome='Aline Ferreira'>"A experiência foi maravilhosa! Desde o atendimento inicial até a entrega final, tudo foi extremamente organizado. O processo é prático e intuitivo, e pude acompanhar cada etapa com facilidade. Ficarei feliz em utilizar novamente este serviço!"</Avalizacoes>
                    <Avalizacoes avatar={avatar2} nome='Felipe Silva'>"Fiquei muito impressionado com a qualidade do serviço. Desde a coleta até a entrega, tudo foi feito com muito profissionalismo. É evidente o cuidado e o compromisso com a satisfação do cliente. Adorei a experiência!"</Avalizacoes>
                    <Avalizacoes avatar={avatar3} nome='Mariana Costa'>"Serviço impecável! A atenção aos detalhes e o cuidado com a encomenda foram evidentes em cada etapa. O processo de entrega foi rápido e sem complicações, tornando tudo muito tranquilo. Com certeza voltarei a utilizar!"</Avalizacoes>
                    <Avalizacoes avatar={avatar5} nome='Lucas Oliveira'>"Uma experiência incrível! Desde o início, pude perceber o profissionalismo e a dedicação da equipe. O sistema de rastreamento é eficiente e me deixou muito seguro durante o processo. Muito satisfeito com o resultado!"</Avalizacoes>
                    <Avalizacoes avatar={avatar6} nome='Sofia Almeida'>"Excelente do começo ao fim! A entrega foi realizada de forma rápida e organizada, e tudo chegou exatamente como combinado. Estou muito feliz com o serviço e o atendimento recebido. Altamente recomendável!"</Avalizacoes>
                </div>
            </section>
            <section className="PagBody_5">
                <div className="Imgs_Parceiros">
                    <a href="https://www.pichau.com.br" target="a_black"><img src={img_parceiro_3} alt="imagem de parceiro"/></a>
                    <a href="https://www.amazon.com.br" target="a_black"><img src={img_parceiro_2} alt="imagem de parceiro"/></a>
                    <a href="https://www.kabum.com.br" target="a_black"><img src={img_parceiro_4} alt="imagem de parceiro"/></a>
                    <a href="https://www.terabyteshop.com.br" target="a_black"><img src={img_parceiro_1} alt="imagem de parceiro"/></a>
                </div>
            </section>
            <Creditos/>
        </div>
    );
}

export default Home;