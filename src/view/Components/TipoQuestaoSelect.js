import React from 'react'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class TipoQuestaoSelect extends React.Component {
  render() {
    return (

      <Form.Group controlId="TipoQuestaoSelectId">
        <Form.Control as="select">
          <option>Discursiva</option>
          <option>Objetiva</option>
        </Form.Control>
      </Form.Group>
    );
  }
}

export default TipoQuestaoSelect;
