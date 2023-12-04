import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa | undefined
}



function Cronometro({selecionado} : Props){
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos( (selecionado.tempo)))
        }
        
    },[selecionado])
   
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronometro</p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} /> {/* dessa forma estiliza */}

            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}

export default Cronometro;
// outra forma de exportar é iniciar com export function(){ ...}