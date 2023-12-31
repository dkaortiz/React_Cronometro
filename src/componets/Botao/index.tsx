import React from "react";
// import './style.scss'; não é mais variavel, pois esta como modulo o css
import style from "./Botao.module.scss";

class Botao extends React.Component < { 
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined//prop: nome da prop "propriedade "que nesse caso é texto com tipo string (isso para identificar que esta utilizando typescript e não react)
    onClick?: ()=> void


} > {     //as informçoes do type, pegou tipo type, pelo <button> na linha de baixo
    

        render() { //função obrigatoria
        const{type = "button", onClick} = this.props;
        // const color = "red"
        return( //retorna um html (podendeo escrever JS)
            <button onClick={onClick}type={type}className={style.botao}>
                {this.props.children} {/*para que o componente reconheça elementos colocados dentro da nossa tag Botao. Após isso, substituímos o trecho */}
                {/*Pegando objeto props {this.props} para pegar conteudo/texto, {this.props.texto}
                em vez de pegar o escrito botão, vamos pegar a props */}
            </button>
        )
    }
}

export default Botao;