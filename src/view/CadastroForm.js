import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import TipoUsuarioSelect from './Components/TipoUsuarioSelect';
import CadastrarButton from './Components/CadastrarButton';
import UserStore from '../store/UserStore'
import LoginForm from './LoginForm';

import enadewallpapper from '../assets/enade-wallpapper.png'


class CadastroForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      tipo:''
    }
  }

  setInputValue(property, val){
    this.setState({
      [property]: val
    })
  }

  resetForm(){
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
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
      
      axios.post('http://localhost:8080/usuario/save',{
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
      <div className="cadastroForm col-md-8 mx-auto text-center">
        <br></br>
        <br></br>
        <br></br>
        <h1>Cadastro de Usuário</h1>
        <br></br>
        <br></br>
        <InputField
            className='col-md-12'
            type='text'
            placeholder='Nome'
            onChange={(val) => this.setInputValue('nome', val)}
        >
        </InputField>
        <br></br>
        <br></br>
        <InputField
            className='col-md-12'
            type='email'
            placeholder='Email'
            onChange={(val) => this.setInputValue('email', val)}
        >
        </InputField>
        <br></br>
        <br></br>
        <div className="row col-md-12">
            <InputField
                className='col-md-12'
                type='password'
                placeholder='Senha'
                onChange={(val) => this.setInputValue('senha', val)}
            >
            </InputField>
            <TipoUsuarioSelect>

            </TipoUsuarioSelect>
        </div>

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

export default CadastroForm;
