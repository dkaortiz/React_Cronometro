import React from 'react';
import Lista from '../componets/Lista';
import Formulario from '../componets/Formulario';
// import './style.scss' (importar so css)
import style from './App.module.scss'; //importar como se fosse objeto a folha de estilo, por causa do modulo
import Cronometro from '../componets/Cronometro';



function App() {
  return (
    <div className={style.AppStyle}> 
    {/* em vez de importar como string classname="...." vms impportar como varial js por causa do modulo*/}
     <Formulario /> {/* Estiliza*/}
     <Lista />
     <Cronometro />
    </div>
  );
}

export default App;
