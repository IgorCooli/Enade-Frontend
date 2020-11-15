import React from 'react'

import Button from 'react-bootstrap/Button';


class NavbarButton extends React.Component{
  render(){
    return (
      <div className="navbarButton">
        <Button 
          variant="light"
          className={this.props.className}
          disabled={this.props.disabled}
          onClick={ () => this.props.onClick() }
        >
          {this.props.text}
        </Button>{' '}
      </div>
    );
  }
}

export default NavbarButton;
