import React from 'react'
import axios from 'axios'

import Card from 'react-bootstrap/Card';


class Prova extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        usuarioId: this.props.usuarioId,
        provaId: this.props.provaId,
        questoes: []
    }
  }

  setInputValue(property, val){
    this.setState({
      [property]: val
    })
  }

  async componentDidMount(){
    try {
        this.buscarQuestoes(this.state.provaId)
    } catch (error) {

    }
  }

  async buscarQuestoes(provaId){
    axios.get(`http://localhost:8080/prova/findquestoes/${provaId}`)
    .then((response)=>{
        this.setInputValue('listaQuestoes', response.data)
        console.log(response.data)
    })

  }

  render(){
    return (
      <div className="inputField col-md-10">
          <Card>
            <Card.Header>{`Questão ${this.props.nroQuestao}`}</Card.Header>
            <Card.Body>
                <Card.Title className=" d-flex justify-content-left">{this.props.descricao}</Card.Title>
                <br></br>
                <Card.Footer className="text-muted">{this.props.ativo}</Card.Footer>
            </Card.Body>
            </Card>
            <br></br>
      </div>
    );
  }
}

export default Prova;
