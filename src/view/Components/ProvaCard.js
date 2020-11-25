import React from 'react'

import Card from 'react-bootstrap/Card';


class ProvaCard extends React.Component{


  render(){
    return (
      <div className="inputField col-md-10">
          <Card>
            <Card.Header>{`Prova ${this.props.id}`}</Card.Header>
            <Card.Body>
                <Card.Title className=" d-flex justify-content-left">{`Enade ${this.props.data}`}</Card.Title>
            </Card.Body>
            </Card>
            <br></br>
      </div>
    );
  }
}

export default ProvaCard;
