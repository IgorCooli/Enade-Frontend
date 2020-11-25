import React from 'react'
import './App.css';
import { observer } from 'mobx-react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import UserStore from './store/UserStore';
import LoginForm from './view/LoginForm';
import SubmitButton from './view/Components/SubmitButton';
import CadastroFormSemProfessor from './view/CadastroFormSemProfessor'
import NavbarComponent from './view/Components/NavbarComponent'
import NavbarProfessor from './view/Components/NavbarProfessor'

import enadewallpapper from './assets/enade-wallpapper.png'

class App extends React.Component{

  async componentDidMount(){
    try {

      console.log(UserStore)
      if(UserStore.isLoggedIn === true){
        UserStore.loading = false;
      }else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }

    } catch (error) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout(){
    try {
      UserStore.isLoggedIn = false;
      UserStore.nome = '';
      UserStore.id = 0;
      UserStore.email = '';
      UserStore.senha = '';
      UserStore.tipo = '';

    } catch (error) {
      console.log(error)
    }
  }

  render(){

    if(UserStore.loading){
      return(
        <div className="app">
          <div className="container">
            Carregando, aguarde por favor...
          </div>
        </div>
      )
    }else{
      if(UserStore.isLoggedIn){
        if(UserStore.tipo === "Estudante"){
          return(
            <div className="app">
              <NavbarComponent
                usuarioId={UserStore.id}
                onClick={() => this.doLogout()}
                nome={UserStore.nome}
              ></NavbarComponent>
              <div id="cardPrincipal" className="container col-md-10">
                <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <img src={enadewallpapper}></img>
                </div>
            </div>
          )
        }if(UserStore.tipo === "Professor"){
          return(
            <div className="app">
              <NavbarProfessor
                onClick={() => this.doLogout()}
                nome={UserStore.nome}
              ></NavbarProfessor>
              <div id="cardPrincipal" className="container col-md-10">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src={enadewallpapper}></img>
              </div>
            </div>
          )
        }
      }
    }

    return (
      <div className="app" id="app">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default observer(App);
