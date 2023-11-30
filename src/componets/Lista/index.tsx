import React, { useState } from "react";
// import './style.scss';
import style from "./Lista.module.scss";
import Item from "./Item";

function Lista(){ //paramentros da função e sem funçao obg, apenas retornar oqe escrever
    const [tarefas, /*index 0 é tarefas*/ setTarefas /*index 1*/] = useState([{ /* para mudar o estado da função useState função inicial é as tarefas*/
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'JavaScript',
        tempo:  '01:00:00'

},{
        tarefa: 'TypeScript',
        tempo: '03:00:00'
}]);
    return(
         <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas ([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00"}]) //parentes função

            }}>
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