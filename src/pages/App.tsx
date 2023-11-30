import React, { useState } from 'react';
import Lista from '../componets/Lista';
import Formulario from '../componets/Formulario';
// import './style.scss' (importar so css)
import style from './App.module.scss'; //importar como se fosse objeto a folha de estilo, por causa do modulo
import Cronometro from '../componets/Cronometro';




function App() {
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
