import React from "react";
import styles from './Login.module.css'
import logo from './assets/SHIPPINGEX.png'

function Login(){
    return(
        <div className={styles.Login}>
            <div className={styles.Background}></div>
            <div className={styles.PainelLogin}>
                <a href="/"><img src={logo}/></a>
                <div className={styles.PainelLogin2}>
                    <h1>Você está pronto?</h1>
                    <h3>Faça login ou cadrastre-se logo abaixo para enviar uma encomenda.</h3>
                    <div className={styles.label_float}>
                        <input type="text" placeholder=" " required/>
                        <label>CPF/CNPJ</label>
                    </div>
                    <div className={styles.label_float}>
                        <input type="password" placeholder=" " required/>
                        <label>Senha</label>
                    </div>
                    <p style={{color: "#d9d9d9"}}>Não tem uma conta? <a href="/login">Criar agora.</a></p>
                    <a href="/login">Esqueci minha senha!</a><br/><br/>
                    <a href="/" className={styles.BtnLogin1}><strong>Logar-se</strong></a>
                    <div className={styles.linha_com_texto}>
                        <hr className={styles.linha_esquerda} />
                        <span>ou</span>
                        <hr className={styles.linha_direita} />
                    </div>
                    <div className={styles.OutrosLogins}>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-google"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;