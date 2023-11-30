import React from "react";
import Botao from "../Botao";
// import './style.scss' não é mais Formulario, pois style, esta como modulo
import style from "./Formulario.module.scss";

class Formulario extends React.Component{
    render(){ //função obrigatorio render(){}
        return(
            <form className={style.novaTarefa}> 
            {/* nome style, pois pegou do import from la em cima, com nome style, teria um outro nome se tivesse colocado */}
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa"> {/*htmlfor para focar onde clicou*/}
                        Adicione um estudo
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Oque voê quer estudar" required/>
                </div>

                <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time" step="1" name="tempo" id="tempo" min = "0:00:00" max="01:30:00" required/>


                </div>
                <Botao>Adicionar</Botao>
                    
                
            </form>

        )
    }
}

export default Formulario;