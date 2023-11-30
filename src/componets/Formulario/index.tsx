import React from "react";
import Botao from "../Botao";
// import './style.scss' não é mais Formulario, pois style, esta como modulo
import style from "./Formulario.module.scss";

class Formulario extends React.Component{
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    adicionarTarefa(evento: React.FormEvent <HTMLFormElement>){ //nào pode ser any (varialvel desconhecido) Evento de formulario que pega dentro objeto nao react
        evento.preventDefault(); //não atualizar a pagina, e não colcoar na url informções do formulario
        console.log('state: ', this.state)
    }

    render(){ //função obrigatorio render(){}
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}> {/*bind associar o thi por isso bind*/} 
            {/* nome style, pois pegou do import from la em cima, com nome style, teria um outro nome se tivesse colocado */}
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa"> {/*htmlfor para focar onde clicou*/}
                        Adicione um estudo
                    </label>
                    <input type="text" name="tarefa" value={this.state.tarefa} onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} id="tarefa"placeholder="Oque voê quer estudar" required/>
                </div>

                <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time" step="1" name="tempo" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})} id="tempo" min = "0:00:00" max="05:30:00" required/>


                </div>
                <Botao type="submit">Adicionar</Botao>
                    
                
            </form>

        )
    }
}

export default Formulario;