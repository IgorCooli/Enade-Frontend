import React from 'react'

import Card from 'react-bootstrap/Card';

import UserImage from '../../assets/default-user-image.png'


class AlunoCard extends React.Component {


  render() {
    return (
      <div className={this.props.className}>
        <Card>
          <Card.Header>{`Aluno ${this.props.id}`}</Card.Header>
          <Card.Body>
            <div className="row">
              <Card.Img variant="top" src={UserImage} style={{ width: '5rem' }} className="col-md-2" />
              <div className="col">
                <Card.Title>{`${this.props.nome}`}</Card.Title>
                <Card.Text>
                  {this.props.email}
              </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default AlunoCard;
