import React from 'react'

import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class QuestaoDiscursivaCardProva extends React.Component {


    render() {
        return (
            <div className="inputField col-md-12">
                <br></br>
                <Card>
                    <Card.Header>{`Questão ${this.props.nroQuestao}`}</Card.Header>
                    <Card.Body>
                        <Card.Title className=" d-flex justify-content-left">{this.props.descricao}</Card.Title>

                        <InputGroup>
                            <InputGroup.Text>Resposta</InputGroup.Text>
                            <FormControl
                                as="textarea" aria-label="Resposta"
                                className={this.props.className}
                                type={this.props.type}
                                placeholder={this.props.placeholder}
                                onChange={(e) => this.props.onChange(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default QuestaoDiscursivaCardProva;
