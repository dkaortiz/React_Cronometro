import React from "react";
import style from "./Relogio.module.scss"

interface Props{
    tempo: number | undefined
}


function Relogio ({ tempo = 0 } : Props){ // se o tempo for undefined (sem valor) ele vai ser 0
    const minutos = Math.floor (tempo/60); //math.floor pega valor inteiro pra menos,  se der 61 segundo pega apenas 60
    const segundos = tempo % 60; //o porcentagem pega o resto/sobra, dos 61 pega o 1
    const   [minutoDezena, minutoUnidade] = String(minutos).padStart(2,'0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return(
        <> {/*Brula, e fingi que tem elemento pai* abrir e fechar <></> é como se tivesse escrito </React.Fragment></ */} 
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}

export default Relogio;