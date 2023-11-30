import React from "react";
import style from "./Relogio.module.scss"


function Relogio (){
    return(
        <> {/*Brula, e fingi que tem elemento pai* abrir e fechar <></> é como se tivesse escrito </React.Fragment></ */} 
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        </>
    )
}

export default Relogio;