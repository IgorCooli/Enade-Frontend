import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import UserStore from '../../store/UserStore';
import Button from 'react-bootstrap/Button';
import NavbarButton from './NavbarButton'
import CadastroForm from '../CadastroForm';
import CadastroQuestaoForm from '../CadastroQuestaoForm';
import CadastroProva from '../CadastroProva'


import enadewallpapper from '../../assets/enade-wallpapper.png'
import BancoDeQuestoes from '../BancoDeQuestoes';
import BancoDeProvas from '../BancoDeProvas';
import Alunos from '../Alunos'


class NavbarComponent extends React.Component {
  doLogout() {
    UserStore.isLoggedIn = false;
    UserStore.nome = '';
    UserStore.id = 0;
    UserStore.email = '';
    UserStore.senha = '';
    UserStore.tipo = '';
    console.log(UserStore)
  }

  cadastrar() {
    const element = (
      <CadastroForm

      >

      </CadastroForm>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }
  bancoDeProvas() {
    const element = (
      <BancoDeProvas
      >

      </BancoDeProvas>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }
  bancoDeQuestoes() {
    const element = (
      <BancoDeQuestoes
      >

      </BancoDeQuestoes>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }

  cadastrarQuestao() {
    const element = (
      <CadastroQuestaoForm

      >

      </CadastroQuestaoForm>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }

  cadastrarProvas() {
    const element = (
      <CadastroProva

      >

      </CadastroProva>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }

  consultarAlunos() {
    const element = (
      <Alunos

      >

      </Alunos>
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
      <div className="navbar">
        <Navbar bg="light" expand="lg" className="col-md-12" style={{borderRadius: 10}}>
          <Navbar.Brand onClick="this.voltar()">Enade</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <DropdownButton variant="light" title="Professores" id="dropDownId">
                <Dropdown.Item>
                  <NavbarButton
                    text='Cadastrar'
                    className='col-md-12'
                    onClick={() => this.cadastrar()}
                  >
                  </NavbarButton>
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton variant="light" title="Questões" id="dropDownId">
                <Dropdown.Item>
                  <NavbarButton
                    text='Banco de Questões'
                    className='col-md-12'
                    onClick={() => this.bancoDeQuestoes()}
                  >
                  </NavbarButton>
                  <NavbarButton
                    text='Cadastrar Questões'
                    className='col-md-12'
                    onClick={() => this.cadastrarQuestao()}
                  >
                  </NavbarButton>
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton variant="light" title="Provas" id="dropDownId">
                <Dropdown.Item>
                  <NavbarButton
                    text='Cadastrar Prova'
                    className='col-md-12'
                    onClick={() => this.cadastrarProvas()}
                  >
                  </NavbarButton>
                  <NavbarButton
                    text='Provas'
                    className='col-md-12'
                    onClick={() => this.bancoDeProvas()}
                  >
                  </NavbarButton>
                </Dropdown.Item>
              </DropdownButton>

              <NavbarButton
                text='Alunos'
                className='col-md-12'
                onClick={() => this.consultarAlunos()}
              >
              </NavbarButton>
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
