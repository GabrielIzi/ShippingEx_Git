import React ,{useState} from "react";
import Creditos from "./components/Creditos";
import MenuBar from "./components/MenuBar";
import styles from './Admin.module.css';
import imgVeh1 from './assets/Gemini_Generated_Image_grjqz4grjqz4grjq.jpeg';
import imgVeh2 from './assets/image1_0.jpg';
import Func_1 from './assets/Funcionario_1.png'
import Func_2 from './assets/Funcionario_2.jpeg'
import Func_3 from './assets/Funcionario_3.jpeg'

function Admin(){
    const [activeTab, setActiveTab] = useState("veiculos");
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const handleActive1 = () => {
        setIsActive1(!isActive1);
    }
    const handleActive2 = () => {
        setIsActive2(!isActive2);
    }
    const handleActive3 = () => {
        setIsActive3(!isActive3);
    }

    return(
        <>
            <MenuBar/>
            <section className={styles.PagBody_1}>
                <div className={styles.PainelAdmin}>
                    <div className={styles.OpsPainel}>
                        <a onClick={() => setActiveTab("veiculos")} style={{ borderBottom: activeTab === "veiculos" ? "2px #000 solid" : "0" }}>Veículos</a>
                        <a onClick={() => setActiveTab("funcionarios")} style={{ borderBottom: activeTab === "funcionarios" ? "2px #000 solid" : "0" }}>Funcionários</a>
                        <a onClick={() => setActiveTab("Pcoleta")} style={{ borderBottom: activeTab === "Pcoleta" ? "2px #000 solid" : "0" }}>Pontos de Coleta</a>
                    </div>
                    <div className={styles.search_container}>
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Pesquisar..."></input>
                    </div>
                    <div className={styles.Veiculos} style={{ display: activeTab === "veiculos" ? "block" : "none" }}>
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
                    <div className={styles.Funcionarios} style={{ display: activeTab === "funcionarios" ? "block" : "none" }}>
                        <div className={styles.PainelFunci} onClick={handleActive1} style={{border: `${isActive1 ? "2px solid #000" : "0"}`}}>
                            <img src={Func_1}/>
                            <div className={styles.InfosFunci}>
                                <h2>Júlio Rafael (ID: D823D9IJMDS)</h2>
                                <p>Horas Trabalhada(Hoje): 3 h 16 min</p>
                                <p>Horas Totais de Trabalho: 5143 h</p>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.PainelFunci} onClick={handleActive2} style={{border: `${isActive2 ? "2px solid #000" : "0"}`}}>
                            <img src={Func_2}/>
                            <div className={styles.InfosFunci}>
                                <h2>Vitor Almeida (ID: DNI1OKDOASD)</h2>
                                <p>Horas Trabalhada(Hoje): 5 h 49 min</p>
                                <p>Horas Totais de Trabalho: 4012 h</p>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.PainelFunci} onClick={handleActive3} style={{border: `${isActive3 ? "2px solid #000" : "0"}`}}>
                            <img src={Func_3}/>
                            <div className={styles.InfosFunci}>
                                <h2>Ana Beatriz (ID: D32F5M82MSD)</h2>
                                <p>Horas Trabalhada(Hoje): 2 h 25 min</p>
                                <p>Horas Totais de Trabalho: 4556 h</p>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.PColetas} style={{ display: activeTab === "Pcoleta" ? "block" : "none" }}>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #01</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Barueri - SP</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #02</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Jandira - SP</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Não</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #03</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Itapevi - SP</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #04</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Osasco - SP</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #05</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Salvador - BA</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Não</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #06</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Rio de Janeiro - RJ</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #07</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Brasília - DF</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #08</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Manaus - AM</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #09</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Curitiba - PR</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                        <div className={styles.OpColeta}>
                            <div className={styles.OpColeta2}>
                                <h2>Ponto de Coleta - #10</h2>
                                <div className={styles.AvaStar}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>📍 Princesa Isabel - PB</p>
                                <p>🕒 Horário de Funcionamento: 08:00 às 23:00</p>
                                <p>🔌 Ponto de Carregamento: Sim</p>
                            </div>
                            <div className={styles.MenuVeh}>
                                <a>Ver no Mapa</a>
                                <a>Editar Informações</a>
                                <a>Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.XAndLess}>
                    <a style={{ display: activeTab === "funcionarios" ? "block" : "none" }}><i class="fa-solid fa-x"></i></a>
                    <a style={{ display: activeTab === "funcionarios" ? "block" : "none" }}><i class="fa-solid fa-plus"></i></a>
                </div>
                <div className={styles.XAndLess2}>
                    <a className={styles.BtnAdd} style={{ display: activeTab != "funcionarios" ? "block" : "none" }}><i class="fa-solid fa-plus"></i></a>
                </div>
            </section>
            {/*<Creditos/>*/}
        </>
    );
}

export default Admin;