import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
      {
        nome: 'Programação',
        corPrimaria: '#57c278',
        corSecundaria: '#d9f7e9'
      },
      {
        nome: 'Front-End',
        corPrimaria: '#82cffa',
        corSecundaria: '#e8f8ff'
      },
      {
        nome: 'Suporte',
        corPrimaria: '#a6d157',
        corSecundaria: '#f0f8e2'
      }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome = {time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
