import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/date";



function Cronometro(){
    console.log('conversão: ',tempoParaSegundos('0:0:01'))
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio /> {/* dessa forma estiliza */}

            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}

export default Cronometro;
// outra forma de exportar é iniciar com export function(){ ...}