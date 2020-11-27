import React from 'react'

import Card from 'react-bootstrap/Card';

import DesativarButton from '../Components/SubmitButton'

class QuestaoObjetivaCard extends React.Component {

  async desativarQuestao() {

  }

  render() {
    return (
      <div className={this.props.className}>
        <Card>
          <Card.Header>{`Questão ${this.props.nroQuestao}`}</Card.Header>
          <Card.Body>
            <Card.Title className=" d-flex justify-content-left">{this.props.descricao}</Card.Title>
            <Card.Text className=" d-flex justify-content-left">{`a) ${this.props.alternativaA}`}</Card.Text>
            <Card.Text className=" d-flex justify-content-left">{`b) ${this.props.alternativaB}`}</Card.Text>
            <Card.Text className=" d-flex justify-content-left">{`c) ${this.props.alternativaC}`}</Card.Text>
            <Card.Text className=" d-flex justify-content-left">{`d) ${this.props.alternativaD}`}</Card.Text>
            <Card.Text className=" d-flex justify-content-left">{`e) ${this.props.alternativaE}`}</Card.Text>
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

export default QuestaoObjetivaCard;
