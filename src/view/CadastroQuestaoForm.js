import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import TipoUsuarioSelect from './Components/TipoUsuarioSelect';
import CadastrarButton from './Components/CadastrarButton';
import UserStore from '../store/UserStore'
import LoginForm from './LoginForm';
import TipoQuestaoSelect from './Components/TipoQuestaoSelect'

import enadewallpapper from '../assets/enade-wallpapper.png'


class CadastroQuestaoForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      descricao: '',
      alternativaA: '',
      alternativaB: '',
      alternativaC:'',
      alternativaD:'',
      alternativaE:'',
      questaoCorreta: '',
      tipoQuestao: ''
    }
  }

  setInputValue(property, val){
    this.setState({
      [property]: val
    })
  }


  async cadastrar(){
      if(!this.state.nome){
          return;
      }
      if(!this.state.email){
          return;
      }
      if(!this.state.senha){
          return;
      }
      
      axios.post('http://localhost:8080/questao/save',{
          nome: this.state.nome,
          email: this.state.email,
          senha: this.state.senha,
          tipo: 'Professor'
      })
      .then((response)=>{
          alert('Usuário cadastrado com sucesso!!!');
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

  }

  voltar(){
   
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
      <div className="cadastroQuestaoForm col-md-8 mx-auto text-center">
        <br></br>
        <br></br>
        <br></br>
        <h1>Cadastro de Questões</h1>
        <br></br>
        <br></br>
        <InputField
            className='col-md-12'
            type='text'
            placeholder='Descrição'
            value={this.state.descricao ? this.state.descricao : ''}
            onChange={(val) => this.setInputValue('descricao', val)}
        >
        </InputField>
        <br></br>
        <br></br>
        <TipoQuestaoSelect className="col-md-12">
          
        </TipoQuestaoSelect>
        <br></br>
        <br></br>

        <SubmitButton
                text='Cadastrar'
                className='col-md-12 mx-auto'
                onClick={ () => this.cadastrar() }
            >
                
        </SubmitButton>
        <br></br>
        <CadastrarButton
                text='Voltar'
                className='col-md-12 mx-auto'
                onClick={ () => this.voltar() }
            >
                
        </CadastrarButton>
        
      </div>
    );
  }
}

export default CadastroQuestaoForm;
