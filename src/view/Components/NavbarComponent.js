import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import UserStore from '../../store/UserStore';
import Button from 'react-bootstrap/Button';
import NavbarButton from './NavbarButton'


import enadewallpapper from '../../assets/enade-wallpapper.png'
import BancoDeProvasAluno from '../BancoDeProvasAluno'


class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioId: this.props.usuarioId
    }
  }

  setInputValue(property, val) {
    this.setState({
      [property]: val
    })
  }

  doLogout() {
    UserStore.isLoggedIn = false;
    UserStore.nome = '';
    UserStore.id = 0;
    UserStore.email = '';
    UserStore.senha = '';
    UserStore.tipo = '';
    console.log(UserStore)
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

  visualizarProvas() {
    const element = (
      <BancoDeProvasAluno
        usuarioId={this.state.usuarioId}
      >

      </BancoDeProvasAluno>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));
  }

  render() {
    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg" className="col-md-12">
          <Navbar.Brand onClick="this.voltar()">Enade</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavbarButton
                text='Visualizar Provas'
                className='col-md-12'
                onClick={() => this.visualizarProvas()}
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
