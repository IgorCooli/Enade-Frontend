import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class InputField extends React.Component {
  render() {
    return (
      <div className="inputField">
        <InputGroup>
          <FormControl
            className={this.props.className}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}
          />
        </InputGroup>
      </div>
    );
  }
}

export default InputField;
