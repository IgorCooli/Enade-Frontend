import React from 'react'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class TipoUsuarioSelectSemProfessor extends React.Component{
  render(){
    return (
        <div className="tipoUsuarioSelectSemProfessor col-md-6">
            <Form.Group controlId="TipoUsuarioSelectId">
                <Form.Control as="select">
                    <option>Estudante</option>
                    <option disabled>Professor</option>
                </Form.Control>
            </Form.Group>
      </div>
    );
  }
}

export default TipoUsuarioSelectSemProfessor;
