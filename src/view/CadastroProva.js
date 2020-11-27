import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import SubmitButton from './Components/SubmitButton';
import CadastrarButton from './Components/CadastrarButton';
import QuestaoDiscursivaCard from './Components/QuestaoDiscursivaCard'
import QuestaoObjetivaCard from './Components/QuestaoObjetivaCard'
import DesativarButton from './Components/SubmitButton'
import DataProvaInput from './Components/InputField'

import enadewallpapper from '../assets/enade-wallpapper.png'


class CadastroProva extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProva: '',
      listaQuestoes: [],
      listaQuestoesAdicionadas: []
    }
  }

  setInputValue(property, val) {
    this.setState({
      [property]: val
    })
  }

  async componentDidMount() {
    try {
      this.buscarQuestoes()
    } catch (error) {

    }
  }

  async buscarQuestoes() {
    axios.get('http://localhost:8080/questao/findallativa')
      .then((response) => {
        this.setInputValue('listaQuestoes', response.data)
        console.log(response.data)
      })

  }

  adicionaQuestao(questao) {
    let list = this.state.listaQuestoesAdicionadas;
    list.push(questao)
    this.setInputValue('listaQuestoesAdicionadas', list)
  }

  removeQuestao(questao) {
    let list = this.state.listaQuestoesAdicionadas;
    list.pop(questao)
    this.setInputValue('listaQuestoesAdicionadas', list)
  }

  async cadastrar() {
    axios.post('http://localhost:8080/prova/save', {
      data: this.state.dataProva,
      questoes: this.state.listaQuestoesAdicionadas
    })
      .then((response) => {
        alert('Prova cadastrado com sucesso!!!');
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
      })
      .catch((err) => {
        alert("Erro ao cadastrar prova!!!");
      })
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


  render() {
    return (
      <div className="cadastroProva col-md-8 mx-auto text-center">
        <h4>Data da prova:</h4>
        <DataProvaInput
          className="col-md-12"
          type="text"
          placeholder="dd/mm/aaaa"
          onChange={(val) => this.setInputValue('dataProva', val)}
        >

        </DataProvaInput>

        <br></br>
        {this.state.listaQuestoes.map((questao, index) => {
          if (questao.tipoQuestao == 1) {
            return <div>
              <DesativarButton
                className="col-md-11 mx-auto"
                disabled={false}
                variant={this.state.listaQuestoesAdicionadas.includes(questao) ? "danger" : null}
                onClick={() => this.state.listaQuestoesAdicionadas.includes(questao) ? this.removeQuestao(questao) : this.adicionaQuestao(questao)}
                text={this.state.listaQuestoesAdicionadas.includes(questao) ? 'Remover' : 'Adicionar'}
              >

              </DesativarButton>
              <QuestaoDiscursivaCard
                className="col-md-12"
                nroQuestao={index + 1}
                descricao={questao.descricao}
                ativo={questao.estado == 1 ? 'Ativo' : 'Não ativo'}
              >

              </QuestaoDiscursivaCard>
            </div>
          } else {
            return <div>
              <DesativarButton
                className="col-md-11 mx-auto"
                disabled={false}
                variant={this.state.listaQuestoesAdicionadas.includes(questao) ? "danger" : null}
                onClick={() => this.state.listaQuestoesAdicionadas.includes(questao) ? this.removeQuestao(questao) : this.adicionaQuestao(questao)}
                text={this.state.listaQuestoesAdicionadas.includes(questao) ? 'Remover' : 'Adicionar'}
              >

              </DesativarButton>
              <QuestaoObjetivaCard
                className="col-md-12"
                nroQuestao={index + 1}
                descricao={questao.descricao}
                ativo={questao.estado == 1 ? 'Ativo' : 'Não ativo'}
                alternativaA={questao.alternativaA}
                alternativaB={questao.alternativaB}
                alternativaC={questao.alternativaC}
                alternativaD={questao.alternativaD}
                alternativaE={questao.alternativaE}
              >

              </QuestaoObjetivaCard>
            </div>
          }

        })}
        <SubmitButton
          text='Cadastrar'
          className='col-md-12 mx-auto'
          onClick={() => this.cadastrar()}
        >

        </SubmitButton>
        <br></br>
        <CadastrarButton
          text='Voltar'
          className='col-md-12 mx-auto'
          onClick={() => this.voltar()}
        >

        </CadastrarButton>
        <br></br>
      </div>
    );
  }
}

export default CadastroProva;
