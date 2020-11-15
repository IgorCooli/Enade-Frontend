import React from 'react'
import './App.css';
import { observer } from 'mobx-react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import UserStore from './store/UserStore';
import LoginForm from './view/LoginComponents/LoginForm';
import SubmitButton from './view/Components/SubmitButton';
import NavbarComponent from './view/Components/NavbarComponent'

class App extends React.Component{

  async componentDidMount(){
    try {
      // let res = await fetch('/isLoggedIn',{
      //   method: 'post',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: {

      //   }
      // });

      // let result = await res.json();
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
      // let res = await fetch('/logout',{
      //   method: 'post',
      //   headers: {
      //     'Accept': 'application/json'
      //   }
      // });

      // let result = await res.json();

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
        return(
          <div className="app">
            <NavbarComponent
              onClick={() => this.doLogout()}
              nome={UserStore.nome}
            ></NavbarComponent>
          </div>
        )
      }
    }

    return (
      <div className="app">
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
