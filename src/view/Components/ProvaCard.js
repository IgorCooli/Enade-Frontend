import React from 'react'

import Card from 'react-bootstrap/Card';


class ProvaCard extends React.Component {


  render() {
    return (
      <div className={this.props.className}>
        <Card>
          <Card.Header>{`Prova ${this.props.id}`}</Card.Header>
          <Card.Body>
            <Card.Title className=" d-flex justify-content-left">{`Enade ${this.props.data}`}</Card.Title>
            <footer className="footer">
              {this.props.nota ? "" : this.props.nota}
            </footer>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default ProvaCard;
