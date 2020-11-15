import React from 'react'
import axios from 'axios'

import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';
import UserStore from '../../store/UserStore'


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
      // this.setState({
      //   id: response.data.id,
      //   nome: response.data.nome,
      //   tipo: response.data.tipo,
      // })
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
    // let res = await fetch('/login', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    // });

    // let result = await res.json();
    
    // if(result && result.success){
    //   UserStore.isLoggedId = true;
    //   UserStore.username = result.username;
    // }
    // else if(result && result.success === false){
    //   this.resetForm();
    //   alert(result.msg);
    // }

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

      </div>
    );
  }
}

export default LoginForm;
