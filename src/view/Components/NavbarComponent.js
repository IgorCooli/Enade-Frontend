import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import UserStore from '../../store/UserStore';
import Button from 'react-bootstrap/Button';


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
  render(){
    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg" className="col-md-12">
            <Navbar.Brand href="#home">Enade</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <DropdownButton title={`Olá, ${this.props.nome}`} id="basic-nav-dropdown">
                    <Dropdown.Item><Button variant="light" onClick={() => this.props.onClick()}>Logout</Button></Dropdown.Item>
                </DropdownButton>
            </Navbar.Collapse>
            </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
