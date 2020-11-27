import React from 'react'

import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


class QuestaoObjetivaCardProva extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        }
    }

    setInputValue(property, val) {
        this.setState({
            [property]: val
        })
    }


    render() {
        return (
            <div className="inputField col-md-12">
                <br></br>
                <Card>
                    <Card.Header>{`Questão ${this.props.nroQuestao}`}</Card.Header>
                    <Card.Body>
                        <Card.Title className=" d-flex justify-content-left">{this.props.descricao}</Card.Title>
                        <form>

                            <div className="radio d-flex justify-content-left">
                                <label>
                                    <input onClick={(e) => this.setInputValue('selectedOption', e.target.value)} onChange={(e) => this.props.onChange(e.target.value)} type="radio" value={this.props.alternativas[0].value} checked={this.state.selectedOption === this.props.alternativas[0].value} />
                                    {this.props.alternativas[0].name}
                                </label>
                            </div>
                            <div className="radio d-flex justify-content-left">
                                <label>
                                    <input onClick={(e) => this.setInputValue('selectedOption', e.target.value)} onChange={(e) => this.props.onChange(e.target.value)} type="radio" value={this.props.alternativas[1].value} checked={this.state.selectedOption === this.props.alternativas[1].value} />
                                    {this.props.alternativas[1].name}
                                </label>
                            </div>
                            <div className="radio d-flex justify-content-left">
                                <label>
                                    <input onClick={(e) => this.setInputValue('selectedOption', e.target.value)} onChange={(e) => this.props.onChange(e.target.value)} type="radio" value={this.props.alternativas[2].value} checked={this.state.selectedOption === this.props.alternativas[2].value} />
                                    {this.props.alternativas[2].name}
                                </label>
                            </div>
                            <div className="radio d-flex justify-content-left">
                                <label>
                                    <input onClick={(e) => this.setInputValue('selectedOption', e.target.value)} onChange={(e) => this.props.onChange(e.target.value)} type="radio" value={this.props.alternativas[3].value} checked={this.state.selectedOption === this.props.alternativas[3].value} />
                                    {this.props.alternativas[3].name}
                                </label>
                            </div>
                            <div className="radio d-flex justify-content-left">
                                <label>
                                    <input onClick={(e) => this.setInputValue('selectedOption', e.target.value)} onChange={(e) => this.props.onChange(e.target.value)} type="radio" value={this.props.alternativas[4].value} checked={this.state.selectedOption === this.props.alternativas[4].value} />
                                    {this.props.alternativas[4].name}
                                </label>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default QuestaoObjetivaCardProva;
