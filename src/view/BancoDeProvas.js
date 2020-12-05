import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import CadastrarButton from './Components/CadastrarButton';
import ProvaCard from './Components/ProvaCard'
import ProvaButton from './Components/SubmitButton'
import Relatorios from './Relatorios'

import enadewallpapper from '../assets/enade-wallpapper.png'
import Dashboards from './Dashboards';


class BancoDeProvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listaProvas: []
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
    axios.get('https://enade-backend.herokuapp.com/prova/findall')
      .then((response) => {
        this.setInputValue('listaProvas', response.data)
        console.log(response.data)
      })

  }

  async carregarRelatorios(provaId){
    console.log(this.state.usuarioId)
    const element = (
      <Relatorios
        provaId={provaId}
        listaProvas={this.state.listaProvas}
      >

      </Relatorios>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }

  async carregarDashboards(provaId){
    console.log(this.state.usuarioId)
    const element = (
      <Dashboards
        provaId={provaId}
        listaProvas={this.state.listaProvas}
      >

      </Dashboards>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
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
      <div className="provasDiv col-md-8 mx-auto text-center">
        <br></br>
        {this.state.listaProvas.map((prova, index) => {
          return <div>
          <div className="row">
            <ProvaButton
              className="col-md-6 mx-auto"
              disabled={false}
              onClick={() => this.carregarRelatorios(prova.id)}
              text={"Relatórios"}
            >
            </ProvaButton>
            <ProvaButton
              className="col-md-6 mx-auto"
              disabled={false}
              onClick={() => this.carregarDashboards(prova.id)}
              text={"Dashboards"}
            >
            </ProvaButton>
          </div>
            <ProvaCard
              className="col-md-12"
              id={prova.id}
              data={prova.data}
            >
            </ProvaCard>
          </div>
        })}
        <CadastrarButton
          text='Voltar'
          className='col-md-12 mx-auto'
          onClick={() => this.voltar()}
        >

        </CadastrarButton>

      </div>
    );
  }
}

export default BancoDeProvas;
