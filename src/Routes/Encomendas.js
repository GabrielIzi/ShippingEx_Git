import React, { useState } from "react";
import styles from './Encomendas.module.css';
import MenuBar from "./components/MenuBar";
import Creditos from "./components/Creditos";

function Encomendas(){
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    return(
        <>
            <MenuBar />
            <div className={styles.Check}>
                <p><strong>Conectando o futuro ao seu destino.</strong></p>
                <select>
                    <option>CPF</option>
                    <option>CNPJ</option>
                    <option>Código de Rastreio</option>
                </select>
                <div className={styles.PainelEncomenda}>
                    <input type="text" placeholder="Digite o código da encomenda" required/>
                    <button onClick={toggleVisibility}><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className={styles.scroll_panel} style={{visibility: isVisible ? 'visible' : 'hidden'}}>
                    <h2>Suas Encomendas</h2>
                    <div className={styles.EncEnc}>
                        <div className={styles.EncEnc2}>
                            <h3>Encomenda: X2JM2I13KM</h3>
                            <p>Remetente: Vitor Fraça</p>
                            <p>Destinatário: Lucas Melo</p>
                        </div>
                        <div className={styles.BtnSeeMore} onClick={toggleVisibility2}><a>Ver Mais...</a></div>
                    </div>
                    <div className={styles.EncEnc}>
                        <div className={styles.EncEnc2}>
                            <h3>Encomenda: 21BJU3KN1S</h3>
                            <p>Remetente: Lucas Almeida</p>
                            <p>Destinatário: Mariana Silva</p>
                        </div>
                        <div className={styles.BtnSeeMore} onClick={toggleVisibility2}><a>Ver Mais...</a></div>
                    </div>
                    <div className={styles.EncEnc}>
                        <div className={styles.EncEnc2}>
                            <h3>Encomenda: 32KNK4P11F4</h3>
                            <p>Remetente: João Oliveira</p>
                            <p>Destinatário: Camila Santos</p>
                        </div>
                        <div className={styles.BtnSeeMore} onClick={toggleVisibility2}><a>Ver Mais...</a></div>
                    </div>
                    <div className={styles.EncEnc}>
                        <div className={styles.EncEnc2}>
                            <h3>Encomenda: E1MKDSAOI12</h3>
                            <p>Remetente: Gustavo Costa</p>
                            <p>Destinatário: Beatriz Nunes</p>
                        </div>
                        <div className={styles.BtnSeeMore} onClick={toggleVisibility2}><a>Ver Mais...</a></div>
                    </div>
                    <div className={styles.EncEnc}>
                        <div className={styles.EncEnc2}>
                            <h3>Encomenda: R43KJN9SDK2</h3>
                            <p>Remetente: Felipe Rocha</p>
                            <p>Destinatário: Isabela Pereira</p>
                        </div>
                        <div className={styles.BtnSeeMore} onClick={toggleVisibility2}><a>Ver Mais...</a></div>
                    </div>
                    <div className={styles.EncEnc}>
                        <div className={styles.EncEnc2}>
                            <h3>Encomenda: 2E1WKJ9F5IJ</h3>
                            <p>Remetente: Ricardo Fernandes</p>
                            <p>Destinatário: Ana Martins</p>
                        </div>
                        <div className={styles.BtnSeeMore} onClick={toggleVisibility2}><a>Ver Mais...</a></div>
                    </div>
                </div>

            </div>
            <div className={styles.blurred_background} style={{visibility: isVisible2 ? 'visible' : 'hidden'}}>
                <div className={styles.fixed_panel} style={{visibility: isVisible2 ? 'visible' : 'hidden'}}>
                    <h2>🌎 Local em Tempo Real: Entregue.</h2>
                    <h3>18:20(24/11/2024) - Documento de Transporte Emitido</h3>
                    <p>🚚 São Paulo</p>
                    <h3>06:55(25/11/2024) - Em Transporte...</h3>
                    <p>🚚 São Paulo - Barueri</p>
                    <h3>09:54(25/11/2024) - Saiu Para Rota de Entrega</h3>
                    <p>🚚 Barueri - Seu Endereço</p>
                    <h3>12:24(25/11/2024) - Seu Pedido Foi Entregue</h3>
                    <p>🤍💛 Muito Obrigado por Usar a ShippingEx!</p>
                    <button onClick={toggleVisibility2}>Fechar</button>
                </div>
            </div>
            <Creditos/>
        </>
    );
}

export default Encomendas;