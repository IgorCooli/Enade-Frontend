import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import UserStore from '../../store/UserStore';
import Button from 'react-bootstrap/Button';
import NavbarButton from './NavbarButton'
import CadastroForm from '../CadastroForm';
import CadastroQuestaoForm from '../CadastroQuestaoForm';


import enadewallpapper from '../../assets/enade-wallpapper.png'


class NavbarComponent extends React.Component{
  doLogout(){
      UserStore.isLoggedIn = false;
      UserStore.nome = '';
      UserStore.id = 0;
      UserStore.email = '';
      UserStore.senha = '';
      UserStore.tipo = '';
      console.log(UserStore)
  }

  cadastrar(){
    const element = (
      <CadastroForm
        
      >

      </CadastroForm>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }

  cadastrarQuestao(){
    const element = (
      <CadastroQuestaoForm
        
      >

      </CadastroQuestaoForm>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
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
      <div className="navbar">
        <Navbar bg="light" expand="lg" className="col-md-12">
            <Navbar.Brand onClick="this.voltar()">Enade</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <DropdownButton variant="light" title="Professores" id="dropDownId">
                      <Dropdown.Item>
                        <NavbarButton
                          text='Cadastrar'
                          className='col-md-12'
                          onClick={ () => this.cadastrar() }
                        >
                        </NavbarButton>
                      </Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton variant="light" title="Questões" id="dropDownId">
                      <Dropdown.Item>
                        <NavbarButton
                          text='Banco de Questões'
                          className='col-md-12'
                          onClick={ () => 0 }
                        >
                        </NavbarButton>
                        <NavbarButton
                          text='Cadastrar Questões'
                          className='col-md-12'
                          onClick={ () => this.cadastrarQuestao() }
                        >
                        </NavbarButton>
                      </Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton variant="light" title="Provas" id="dropDownId">
                      <Dropdown.Item>
                        <NavbarButton
                          text='Cadastrar Prova'
                          className='col-md-12'
                          onClick={ () => 0 }
                        >
                        </NavbarButton>
                        <NavbarButton
                          text='Resultados'
                          className='col-md-12'
                          onClick={ () => 0 }
                        >
                        </NavbarButton>
                      </Dropdown.Item>
                  </DropdownButton>
                </Nav>
                <DropdownButton variant="light" title={`Olá, ${this.props.nome}`} id="dropDownId">
                    <Dropdown.Item><Button variant="light" onClick={() => this.props.onClick()}>Logout</Button></Dropdown.Item>
                </DropdownButton>
            </Navbar.Collapse>
            </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;