import './Avaliacoes.css'

function Avalizacoes(props){
    return(
        <>
            <div class="avaliacao">
                <div class="usuario">
                    <img src={props.avatar} alt=""/>
                    <h4>{props.nome}</h4>
                </div>
                <p>{props.children}</p>
            </div>
        </>
    )
}

export default Avalizacoes