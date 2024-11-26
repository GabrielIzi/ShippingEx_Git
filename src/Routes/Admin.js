import React from "react";
import Creditos from "./components/Creditos";
import MenuBar from "./components/MenuBar";
import styles from './Admin.module.css';
import imgVeh1 from './assets/Gemini_Generated_Image_grjqz4grjqz4grjq.jpeg';
import imgVeh2 from './assets/image1_0.jpg';
import Func_1 from './assets/Funcionario_1.png'
import Func_2 from './assets/Funcionario_2.jpeg'
import Func_3 from './assets/Funcionario_3.jpeg'

function Admin(){
    return(
        <>
            <MenuBar/>
            <section className={styles.PagBody_1}>
                <div className={styles.PainelAdmin}>
                    <div className={styles.OpsPainel}>
                        <a>Veículos</a>
                        <a>Funcionários</a>
                        <a>Encomendas</a>
                    </div>
                    <div className={styles.Veiculos}>
                        <div className={styles.VehStatus}>
                            <img src={imgVeh1} alt="Imagem do Veículo"/>
                            <div className={styles.InfosVeh}>
                                <h2>Veículo - ID: 01🟢</h2>
                                <span>Bateria: </span><progress value="70" max="100">70 %</progress>
                                <p>Localização em Tempo Real: Itapevi/SP</p>
                                <p>Motorista de Emergência: <a>Júlio Rafael</a>(5 horas de trabalho)</p>
                                <p>Última Manutenção: 25/10/2024(<a>Ver Mais</a>)</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Solicitar Manutenção</a>
                                <a>Modo de Segurança</a>
                                <a>Excluir Veículo</a>
                            </div>
                        </div>
                        <div className={styles.VehStatus}>
                            <img src={imgVeh2} alt="Imagem do Veículo"/>
                            <div className={styles.InfosVeh}>
                                <h2>Veículo - ID: 02🔴</h2>
                                <span>Bateria: </span><progress value="0" max="100">70 %</progress>
                                <p>Localização em Tempo Real: Barueri/SP</p>
                                <p>Motorista de Emergência: N/D</p>
                                <p>Última Manutenção: Atualmente(<a>Ver Mais</a>)</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Solicitar Manutenção</a>
                                <a>Modo de Segurança</a>
                                <a>Excluir Veículo</a>
                            </div>
                        </div>
                        <div className={styles.VehStatus}>
                            <img src={imgVeh1} alt="Imagem do Veículo"/>
                            <div className={styles.InfosVeh}>
                                <h2>Veículo - ID: 03🟢</h2>
                                <span>Bateria: </span><progress value="20" max="100">70 %</progress>
                                <p>Localização em Tempo Real: Osasco/SP</p>
                                <p>Motorista de Emergência: <a>Vitor Almeida</a>(5 horas de trabalho)</p>
                                <p>Última Manutenção: 20/10/2024(<a>Ver Mais</a>)</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Solicitar Manutenção</a>
                                <a>Modo de Segurança</a>
                                <a>Excluir Veículo</a>
                            </div>
                        </div>
                        <div className={styles.VehStatus}>
                            <img src={imgVeh1} alt="Imagem do Veículo"/>
                            <div className={styles.InfosVeh}>
                                <h2>Veículo - ID: 04🟢</h2>
                                <span>Bateria: </span><progress value="95" max="100">70 %</progress>
                                <p>Localização em Tempo Real: Jandira/SP</p>
                                <p>Motorista de Emergência: <a>Ana Beatriz</a>(5 horas de trabalho)</p>
                                <p>Última Manutenção: 21/11/2024(<a>Ver Mais</a>)</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Solicitar Manutenção</a>
                                <a>Modo de Segurança</a>
                                <a>Excluir Veículo</a>
                            </div>
                        </div>
                        <div className={styles.VehStatus}>
                            <img src={imgVeh2} alt="Imagem do Veículo"/>
                            <div className={styles.InfosVeh}>
                                <h2>Veículo - ID: 05🔴</h2>
                                <span>Bateria: </span><progress value="0" max="100">70 %</progress>
                                <p>Localização em Tempo Real: Barueri/SP</p>
                                <p>Motorista de Emergência: N/D</p>
                                <p>Última Manutenção: Atualmente(<a>Ver Mais</a>)</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Solicitar Manutenção</a>
                                <a>Modo de Segurança</a>
                                <a>Excluir Veículo</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Funcionarios}>
                        <div className={styles.PainelFunci}>
                            <img src={Func_1}/>
                            <div className={styles.InfosFunci}>
                                <h2>Júlio Rafael (ID: D823D9IJMDS)</h2>
                                <p>Horas Trabalhada(Hoje): 3 h 16 min</p>
                                <p>Horas Totais de Trabalho: 5143 h</p>
                            </div>
                        </div>
                        <div className={styles.PainelFunci}>
                            <img src={Func_2}/>
                            <div className={styles.InfosFunci}>
                                <h2>Vitor Almeida (ID: DNI1OKDOASD)</h2>
                                <p>Horas Trabalhada(Hoje): 5 h 49 min</p>
                                <p>Horas Totais de Trabalho: 4012 h</p>
                            </div>
                        </div>
                        <div className={styles.PainelFunci}>
                            <img src={Func_3}/>
                            <div className={styles.InfosFunci}>
                                <h2>Ana Beatriz (ID: D32F5M82MSD)</h2>
                                <p>Horas Trabalhada(Hoje): 2 h 25 min</p>
                                <p>Horas Totais de Trabalho: 4556 h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Creditos/>
        </>
    );
}

export default Admin;