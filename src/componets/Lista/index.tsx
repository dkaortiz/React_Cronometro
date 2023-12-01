// import './style.scss';
import style from "./Lista.module.scss";
import Item from "./Item";
// import { ITarefa } from "../../types/tarefa";
import ITarefa from "../../types/tarefa"




function Lista({tarefas}: {tarefas: ITarefa[]}){ //paramentros da função e sem funçao obg, apenas retornar oqe escrever
    
    return(
         <aside className={style.listaTarefas}>
            <h2>
                Estudo do Dia
                <ul>
                    {tarefas.map((item, index) => (
                        <Item 
                            key={index} //lista so tem resposabilidade dessa tarefa, rederizar
                            {...item} //em vez de tarefa={item.tarefa} e outro com tempo, com 3 pontos pega todas keys, item que vem de map é um objeto vem todos obejtos com props
                        />
                        
                    ))} 
                    
                </ul>
            </h2>

         </aside>
    )
}

export default Lista;