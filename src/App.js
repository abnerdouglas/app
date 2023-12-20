
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';


function App() {
  const posicoes = [
    {
      nome: 'Atacante',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Meio-Campista',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Defensor',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Goleiro',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Técnico',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {posicoes.map(posicao => < Posicao 
        key={posicao.nome} 
        nome={posicao.nome} 
        corPrimaria={posicao.corPrimaria} 
        corSecundaria={posicao.corSecundaria} 
        jogadores={jogadores.filter(jogador => jogador.posicao === posicao.nome)}
      />)}   

    </div>
  );
}


export default App;
