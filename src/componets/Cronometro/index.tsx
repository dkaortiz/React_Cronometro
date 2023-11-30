import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"



function Cronometro(){
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