import React from 'react'

import Button from 'react-bootstrap/Button';


class CadastrarButton extends React.Component{
  render(){
    return (
      <div className="cadastrarButton">
        <Button 
          variant="warning"
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

export default CadastrarButton;
