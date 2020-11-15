import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import CadastrarButton from './Components/CadastrarButton';
import UserStore from '../store/UserStore'
import CadastroFormSemProfessor from './CadastroFormSemProfessor';


class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      id: 0,
      nome: '',
      email: '',
      senha: '',
      tipo:'',
      buttonDisabled: false
    }
  }

  setInputValue(property, val){
    val = val.trim();
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


  async doLogin(){
    if(!this.state.email){
      return;
    }
    if(!this.state.senha){
      return;
    }
    this.setState({
      buttonDisabled: true,
    })

    axios.post('http://localhost:8080/usuario/login', {
      email: this.state.email,
      senha: this.state.senha
    })
    .then((response)=>{
      console.log(response.data)
      console.log(response.status)

      if(response.status === 200){
        UserStore.isLoggedIn = true;
        UserStore.id = response.data.id;
        UserStore.nome = response.data.nome;
        UserStore.tipo = response.data.tipo;
        UserStore.email = response.data.email;
        UserStore.senha = response.data.senha;
        UserStore.isLoggedIn = true;
        console.log(UserStore)
      }else if(response.status === 401){
        this.resetForm();
        alert("Usuário não encontrado!")
      }
    })
    .catch((err)=>{
      console.error(err)
      this.resetForm();
      alert("Usuário não encontrado!")
    })
  }

  cadastrar(){
    const element = (
      <CadastroFormSemProfessor
        
      >

      </CadastroFormSemProfessor>
    )
    ReactDOM.render(element, document.getElementById('app'));
  }

  render(){
    return (
      <div className="loginForm col-md-4 mx-auto text-center">
        
        <br></br>

        <h3>Login</h3>
        
        <br></br>
        
        <InputField
          className='col-md-10 mx-auto'
          type='email'
          placeholder='Email'
          value={this.state.email ? this.state.email : ''}
          onChange={ (val) => this.setInputValue('email', val) }
        >

        </InputField>

        <br></br>

        <InputField
          className='col-md-10 mx-auto'
          type='password'
          placeholder='Senha'
          value={this.state.senha ? this.state.senha : ''}
          onChange={ (val) => this.setInputValue('senha', val) }
        >

        </InputField>
        
        <br></br>

        <SubmitButton
          text='Login'
          className='col-md-6'
          disabled={this.state.buttonDisabled}
          onClick={ () => this.doLogin() }
        >
        </SubmitButton>

        <br></br>

        <CadastrarButton
          text='Cadastre-se'
          className='col-md-6'
          disabled={this.state.buttonDisabled}
          onClick={() => this.cadastrar()}
        >

        </CadastrarButton>
        
        <br></br>

      </div>
    );
  }
}

export default LoginForm;
