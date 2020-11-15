import React from 'react'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class TipoUsuarioSelect extends React.Component{
  render(){
    return (
        <div className="tipoUsuarioSelect col-md-6">
            <Form.Group controlId="TipoUsuarioSelectId">
                <Form.Control as="select">
                    <option disabled>Estudante</option>
                    <option>Professor</option>
                </Form.Control>
            </Form.Group>
      </div>
    );
  }
}

export default TipoUsuarioSelect;
