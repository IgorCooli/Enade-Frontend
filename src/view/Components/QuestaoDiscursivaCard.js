import React from 'react'

import Card from 'react-bootstrap/Card';


class QuestaoDiscursivaCard extends React.Component {


  render() {
    return (
      <div className={this.props.className}>
        <Card>
          <Card.Header>{`Questão ${this.props.nroQuestao}`}</Card.Header>
          <Card.Body>
            <Card.Title className=" d-flex justify-content-left">{this.props.descricao}</Card.Title>
            <br></br>
            <Card.Footer className="text-muted">{this.props.ativo}</Card.Footer>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default QuestaoDiscursivaCard;
