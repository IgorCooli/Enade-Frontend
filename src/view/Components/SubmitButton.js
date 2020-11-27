import React from 'react'

import Button from 'react-bootstrap/Button';


class SubmitButton extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <br></br>
        <Button
          variant={this.props.variant ? this.props.variant : "primary"}
          className={this.props.className}
          disabled={this.props.disabled}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </Button>{' '}
      </div>
    );
  }
}

export default SubmitButton;
