import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import CadastrarButton from './Components/CadastrarButton';
import ProvaCard from './Components/ProvaCard'

import enadewallpapper from '../assets/enade-wallpapper.png'
import AlunoCard from './Components/AlunoCard';


class Alunos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listaAlunos: []
    }
  }
  setInputValue(property, val) {
    this.setState({
      [property]: val
    })
  }

  async componentDidMount() {
    try {
      this.buscarProvas()
    } catch (error) {

    }
  }


  async buscarProvas() {
    axios.get('http://localhost:8080/usuario/findallalunos')
      .then((response) => {
        this.setInputValue('listaAlunos', response.data)
        console.log(response.data)
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
      <div className="alunosDiv col-md-8 mx-auto text-center">
        <br></br>
        {this.state.listaAlunos.map((aluno, index) => {
          return <div>
            <AlunoCard
              className="col-md-12"
              id={aluno.id}
              nome={aluno.nome}
              email={aluno.email}
            >

            </AlunoCard>
          </div>
        })}
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

export default Alunos;
