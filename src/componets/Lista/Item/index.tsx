import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss"

interface Props extends ITarefa{

    selecionaTarefa: (tarefaSelecionada: ITarefa) =>void
}

function Item (
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    } : Props){
        
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado? style.itemCompletado: ''}`} 
        onClick={() => !completado && selecionaTarefa({ //se nao tiver completado ele executa a tarefa !completado && ....
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}> {/*key pra identificar pois nao tem um class*/}
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={style.concluido} aria-label="item concluido"></span> }
    </li>
    )
}

export default Item;
