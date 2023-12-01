import React, { useState } from 'react';
import Lista from '../componets/Lista';
import Formulario from '../componets/Formulario';
// import './style.scss' (importar so css)
import style from './App.module.scss'; //importar como se fosse objeto a folha de estilo, por causa do modulo
import Cronometro from '../componets/Cronometro';
import { ITarefa } from '../types/tarefa';




function App() {
  const [tarefas, /*index 0 é tarefas*/ setTarefas /*index 1*/] = useState<ITarefa[]>([] /* para mudar o estado da função useState função inicial é as tarefas*/
    ); //Tipagem: useState<ITarefa[] | []>([] - Especificou que pode ser ITarefas ou array vazia PARA TIPAR SINAL DE MENOR E MAIOR
  return (
    <div className={style.AppStyle}> 
    {/* em vez de importar como string classname="...." vms impportar como varial js por causa do modulo*/}
     <Formulario setTarefas={setTarefas}/> {/* Estiliza*/}
     <Lista tarefas={tarefas}/>
     <Cronometro />
    </div>
  );
}

export default App;

/*app informação de cima para baixo, não é unidirecional
passar informaçao do APP para formulario por exemplo, será via props
e não vice versa... 


*/