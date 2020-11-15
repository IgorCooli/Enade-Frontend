import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import TipoUsuarioSelectSemProfessor from './Components/TipoUsuarioSelectSemProfessor';
import CadastrarButton from './Components/CadastrarButton';
import UserStore from '../store/UserStore'
import LoginForm from './LoginForm';


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
          tipo: 'Estudante'
      })
      .then((response)=>{
          alert('Usuário cadastrado com sucesso!!!');
          const element = (
              <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <LoginForm></LoginForm>
              </div>
          )
          ReactDOM.render(element, document.getElementById('app'));
      })

  }

  async voltar(){
   
    const element = (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <LoginForm></LoginForm>
      </div>
    )
    ReactDOM.render(element, document.getElementById('app'));

}


  render(){
    return (
      <div className="cadastroForm col-md-8 mx-auto text-center">
        <br></br>
        <br></br>
        <br></br>
        <h1>Tela de cadastro</h1>
        <br></br>
        <br></br>
        <InputField
            className='col-md-12'
            type='text'
            placeholder='Nome'
            value={this.state.nome ? this.state.nome : ''}
            onChange={(val) => this.setInputValue('nome', val)}
        >
        </InputField>
        <br></br>
        <br></br>
        <InputField
            className='col-md-12'
            type='email'
            placeholder='Email'
            value={this.state.email ? this.state.email : ''}
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
                value={this.state.senha ? this.state.senha : ''}
                onChange={(val) => this.setInputValue('senha', val)}
            >
            </InputField>
            <TipoUsuarioSelectSemProfessor>

            </TipoUsuarioSelectSemProfessor>
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
