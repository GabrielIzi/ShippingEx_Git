import React, { useState, useEffect } from "react";
import logo from './assets/SHIPPINGEX.png'
import styles from './Termos.module.css';
import MenuBar from "./components/MenuBar";
import Creditos from "./components/Creditos";

function Termos() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <MenuBar/>
            <div className={styles.termosContainer}>
                <div className={styles.header}>
                    <h1>Termos e Condições de Uso</h1>
                    <p>Leia com atenção antes de utilizar nossos serviços.</p>
                </div>
                <div className={styles.content}>
                    <section>
                        <h2>1. Aviso de Isenção de Responsabilidade Legal</h2>
                        <p>
                        Os conteúdos presentes neste site, incluindo estes Termos e Condições,
                         possuem caráter exclusivamente informativo e funcional. Eles não constituem,
                          de forma alguma, um contrato ou documento com valor legal e não geram quaisquer
                           direitos ou obrigações legais entre os usuários e a ShippingEx.
                        </p>
                    </section>
                    <section>
                        <h2>2. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar o site da ShippingEx, você concorda em cumprir estes Termos e Condições de Uso, todas as leis e regulamentos aplicáveis.
                        </p>
                    </section>
                    <section>
                        <h2>3. Uso do Site</h2>
                        <p>
                            O usuário compromete-se a utilizar o site apenas para fins lícitos e permitidos. É proibido enviar informações falsas ou enganosas.
                        </p>
                    </section>
                    <section>
                        <h2>4. Cadastro e Segurança</h2>
                        <p>
                            Alguns serviços exigem cadastro. O usuário é responsável por fornecer informações precisas e garantir a segurança de sua conta.
                        </p>
                    </section>
                    <section>
                        <h2>5. Privacidade</h2>
                        <p>
                            Coletamos e utilizamos dados pessoais em conformidade com nossa Política de Privacidade.
                        </p>
                    </section>
                    <section>
                        <h2>6. Serviços Disponíveis</h2>
                        <p>
                            A ShippingEx oferece rastreamento de encomendas e informações sobre entrega de produtos, não sendo responsável por atrasos externos.
                        </p>
                    </section>
                    <section>
                        <h2>7. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo deste site é protegido por direitos autorais. É proibido reproduzir ou modificar qualquer conteúdo sem autorização.
                        </p>
                    </section>
                    <section>
                        <h2>8. Responsabilidades</h2>
                        <p>
                            Não garantimos que o site estará disponível 100% do tempo ou livre de erros.
                        </p>
                    </section>
                    <section>
                        <h2>9. Links para Terceiros</h2>
                        <p>
                            Este site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou políticas desses sites.
                        </p>
                    </section>
                    <section>
                        <h2>10. Modificações nos Termos</h2>
                        <p>
                            A ShippingEx reserva-se o direito de alterar estes Termos a qualquer momento.
                        </p>
                    </section>
                    <section>
                        <h2>11. Legislação Aplicável</h2>
                        <p>
                            Estes Termos são regidos pelas leis brasileiras. Disputas serão resolvidas no foro da sede da ShippingEx.
                        </p>
                    </section>
                    <section>
                        <h2>12. Contato</h2>
                        <p>
                            Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:suporte@shippingex.com">suporte@shippingex.com</a>.
                        </p>
                    </section>
                </div>
            </div>
            <Creditos/>
        </>
    );
}

export default Termos;
