import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import TipoUsuarioSelect from './Components/TipoUsuarioSelect';
import CadastrarButton from './Components/CadastrarButton';
import UserStore from '../store/UserStore'
import LoginForm from './LoginForm';
import QuestaoDiscursivaCard from './Components/QuestaoDiscursivaCard'
import ProvaCard from './Components/ProvaCard'
import DesativarButton from './Components/SubmitButton'

import enadewallpapper from '../assets/enade-wallpapper.png'


class BancoDeProvas extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      listaProvas: []
    }
  }
  setInputValue(property, val){
    this.setState({
      [property]: val
    })
  }

  async componentDidMount(){
    try {
        this.buscarProvas()
    } catch (error) {

    }
  }


  async buscarProvas(){
    axios.get('http://localhost:8080/prova/findall')
    .then((response)=>{
        this.setInputValue('listaProvas', response.data)
        console.log(response.data)
    })

  }

  async voltar(){
   
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

  render(){
    return (
      <div className="provasDiv col-md-8 mx-auto text-center">
        
        {this.state.listaProvas.map((prova, index)=>{
            return <div className="row col-md-12">
                <ProvaCard
                    id={prova.id}
                    data={prova.data}
                >

                </ProvaCard>
            </div>
        })}

        <br></br>
        <CadastrarButton
                text='Voltar'
                className='col-md-12 mx-auto'
                onClick={ () => console.log(this.state.listaQuestoes) }
            >
                
        </CadastrarButton>
        
      </div>
    );
  }
}

export default BancoDeProvas;
