import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import QuestaoDiscursivaCardProva from './Components/QuestaoDiscursivaCardProva'
import QuestaoObjetivaCardProva from './Components/QuestaoObjetivaCardProva'
import SubmitButton from './Components/SubmitButton'

import enadewallpapper from '../assets/enade-wallpapper.png'


class Prova extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioId: this.props.usuarioId,
      provaId: this.props.provaId,
      questoes: [],
      respostas: []
    }
  }

  setInputValue(property, val) {
    this.setState({
      [property]: val
    })
  }

  async componentDidMount() {
    try {
      this.buscarQuestoes(this.state.provaId)
    } catch (error) {

    }
  }

  async voltar() {

    const element = (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={enadewallpapper}></img>
      </div>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));

  }

  async buscarQuestoes(provaId) {
    axios.get(`http://localhost:8080/prova/findquestoes/${provaId}`)
      .then((response) => {
        // console.log(response.data)

        this.setInputValue('questoes', response.data)

        let respostas = []

        response.data.forEach(element => {
          let resposta = {
            "id": element.id,
            "resposta": "",
            "questaoCorreta": element.questaoCorreta,
            "tipoQuestao": element.tipoQuestao
          }

          respostas.push(resposta)

        });

        this.setInputValue('respostas', respostas)

        console.log(this.state.questoes)
        console.log(this.state.respostas)

        // return response.data
      })

  }

  registraResposta(id, val) {
    this.state.respostas.forEach(element => {
      if (element.id === id) {
        element.resposta = val
      }
    });
    this.opcaoSelecionada(id)
  }

  opcaoSelecionada(id) {
    let selecionado = {}
    this.state.respostas.forEach(element => {
      if (element.id === id) {
        selecionado = element
      }
    })
    console.log(this.state.respostas)
    console.log(selecionado.resposta)
    return selecionado.resposta
  }

  calcularResultado() {
    let total = 0
    this.state.respostas.forEach((element, index) => {
      if (element.resposta !== "" && element.resposta === element.questaoCorreta) {
        total++
      } else if (element.resposta !== "" && element.tipoQuestao === 1) {
        total++
      }
    })

    let nota = 0

    if (total < 20) {
      nota = 0
    } else if (total >= 20 && total < 36) {
      nota = total * 0.28
    } else {
      nota = 10
    }
    nota = (nota).toFixed(2);
    alert(`Sua nota foi: ${nota}`)
    console.log(this.state.respostas)

    this.salvaResultado(nota)

  }

  async salvaResultado(nota) {
    axios.post('http://localhost:8080/resultado/save', {
      valorObtido: nota,
      usuarioId: this.state.usuarioId,
      provaId: this.state.provaId
    })
      .then((response) => {
        alert(response.data)
        this.voltar()
      })
  }

  render() {
    return (
      <div className="questoesDiv col-md-12">

        {this.state.questoes.map((element, index) => {
          if (element.tipoQuestao == 1) {
            return <QuestaoDiscursivaCardProva
              nroQuestao={index + 1}
              descricao={element.descricao}
              className="col-md-12"
              type="text"
              placeholder=""
              onChange={(val) => this.registraResposta(element.id, val)}
            >
            </QuestaoDiscursivaCardProva>
          }
          else {
            let alternativas = [
              {
                "name": ` a) ${element.alternativaA}`,
                "value": 'a'
              },
              {
                "name": ` b) ${element.alternativaB}`,
                "value": 'b'
              },
              {
                "name": ` c) ${element.alternativaC}`,
                "value": 'c'
              },
              {
                "name": ` d) ${element.alternativaD}`,
                "value": 'd'
              },
              {
                "name": ` e) ${element.alternativaE}`,
                "value": 'e'
              },
            ]
            return <QuestaoObjetivaCardProva
              nroQuestao={index + 1}
              descricao={element.descricao}
              alternativas={alternativas}
              check={this.opcaoSelecionada(element.id)}
              onChange={(val) => this.registraResposta(element.id, val)}
            >

            </QuestaoObjetivaCardProva>
          }
        })}
        <SubmitButton
          variant="success"
          className="col-md-12"
          disabled={false}
          onClick={() => this.calcularResultado()}
          text="Enviar"
        >

        </SubmitButton>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Prova;
