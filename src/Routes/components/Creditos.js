import React from "react";
import styles from './Creditos.module.css'
import logo from '../assets/SHIPPINGEX.png'

function Creditos(){
    return(
        <>
            <footer>
                <div className={styles.Creditos}>
                    <img src={logo} alt="Logo da Empresa"/>
                    <div className={styles.CreditosOps}>
                        <a href="/">Central de Atendimento</a>
                        <a href="/">Rastrear Encomenda</a>
                        <a href="/">Termos e Condições</a>
                        <a href="/">Sobre a ShippingEx</a>
                    </div>
                    <div className={styles.CreditosOps}>
                        <a href="/">Trabalhe na ShippingEx</a>
                        <a href="/">Pontos de Coleta</a>
                        <a href="/admin">Sou Funcionario</a>
                        <a href="/">Denúncia</a>
                    </div>
                </div>
                <div className={styles.social_medias}>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                    <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="/"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </footer>
        </>
    );
}

export default Creditos;