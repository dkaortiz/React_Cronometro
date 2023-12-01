import { ITarefa } from "../../../types/tarefa";
import style from "../Lista.module.scss"

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
        console.log('Item atual: ',{tarefa, tempo, selecionado, completado, id} )
    return(
        <li className={style.item} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}> {/*key pra identificar pois nao tem um class*/}
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}

export default Item;