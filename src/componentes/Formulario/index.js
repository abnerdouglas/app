import './Formulario.css'
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [equipe, setEquipe] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [posicao, setPosicao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            imagem,
            equipe,
            nacionalidade,
            posicao
        })
        setNome('')
        setImagem('')
        setEquipe('')
        setNacionalidade('')
        setPosicao('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card do Jogador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                 <CampoTexto
                    obrigatorio={true}
                    label="Equipe"
                    placeholder="Digite o nome da Equipe" 
                    valor={equipe}
                    aoAlterado={valor => setEquipe(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Nacionalidade"
                    placeholder="Digite a Nacionalidade" 
                    valor={nacionalidade}
                    aoAlterado={valor => setNacionalidade(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Posicao" 
                    itens={props.posicoes}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
