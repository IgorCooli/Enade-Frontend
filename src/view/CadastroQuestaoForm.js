import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import TipoUsuarioSelect from './Components/TipoUsuarioSelect';
import CadastrarButton from './Components/CadastrarButton';
import UserStore from '../store/UserStore'
import LoginForm from './LoginForm';
import TipoQuestaoSelect from './Components/TipoQuestaoSelect'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import enadewallpapper from '../assets/enade-wallpapper.png'


class CadastroQuestaoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      descricao: '',
      alternativaA: '',
      alternativaB: '',
      alternativaC: '',
      alternativaD: '',
      alternativaE: '',
      questaoCorreta: 'a',
      tipoQuestao: 1
    }
  }

  setInputValue(property, val) {
    this.setState({
      [property]: val
    })
  }


  async cadastrar() {
    if (!this.state.descricao) {
      return;
    }

    axios.post('http://localhost:8080/questao/save', {
      descricao: this.state.descricao,
      alternativaA: this.state.alternativaA,
      alternativaB: this.state.alternativaB,
      alternativaC: this.state.alternativaC,
      alternativaD: this.state.alternativaD,
      alternativaE: this.state.alternativaE,
      questaoCorreta: this.state.tipoQuestao == 1 ? '' : this.state.questaoCorreta,
      tipoQuestao: this.state.tipoQuestao
    })
      .then((response) => {
        alert('Questão cadastrada com sucesso!!!');
        const element = (
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={enadewallpapper}></img>
          </div>
        )
        ReactDOM.render(element, document.getElementById('cardPrincipal'));
      })

  }

  onChangeAlternativaCorreta(event) {
    this.setInputValue('questaoCorreta', event.target.value)
  }

  onChangeTipoQuestao(event) {
    this.setInputValue('tipoQuestao', event.target.value)
    if (event.target.value == 1) {
      const element = (
        <div></div>
      )
      ReactDOM.render(element, document.getElementById('alternativasId'));
    }
    else {
      const element = (
        <div>
          <InputField
            className='col-md-12'
            type='text'
            placeholder='Alternativa A'
            onChange={(val) => this.setInputValue('alternativaA', val)}
          >
          </InputField>
          <InputField
            className='col-md-12'
            type='text'
            placeholder='Alternativa B'
            onChange={(val) => this.setInputValue('alternativaB', val)}
          >
          </InputField>
          <InputField
            className='col-md-12'
            type='text'
            placeholder='Alternativa C'
            onChange={(val) => this.setInputValue('alternativaC', val)}
          >
          </InputField>
          <InputField
            className='col-md-12'
            type='text'
            placeholder='Alternativa D'
            onChange={(val) => this.setInputValue('alternativaD', val)}
          >
          </InputField>
          <InputField
            className='col-md-12'
            type='text'
            placeholder='Alternativa E'
            onChange={(val) => this.setInputValue('alternativaE', val)}
          >
          </InputField>
          <Form.Group controlId="alternativaCorretaId">
            <Form.Label>Alternativa Correta</Form.Label>
            <Form.Control as="select" onChange={this.onChangeAlternativaCorreta.bind(this)}>
              <option value={"a"}>A</option>
              <option value={"b"}>B</option>
              <option value={"c"}>C</option>
              <option value={"d"}>D</option>
              <option value={"e"}>E</option>
            </Form.Control>
          </Form.Group>
        </div>
      )
      ReactDOM.render(element, document.getElementById('alternativasId'));
    }
  }

  voltar() {

    const element = (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={enadewallpapper}></img>
      </div>
    )
    ReactDOM.render(element, document.getElementById('cardPrincipal'));

  }




  render() {
    return (
      <div className="cadastroQuestaoForm col-md-8 mx-auto text-center">
        <br></br>
        <br></br>
        <br></br>
        <h1>Cadastro de Questões</h1>
        <br></br>
        <br></br>
        <InputField
          className='col-md-12'
          type='text'
          placeholder='Descrição'
          value={this.state.descricao ? this.state.descricao : ''}
          onChange={(val) => this.setInputValue('descricao', val)}
        >
        </InputField>
        <br></br>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Tipo Questão</Form.Label>
          <Form.Control as="select" onChange={this.onChangeTipoQuestao.bind(this)}>
            <option value={1}>Discursiva</option>
            <option value={2}>Objetiva</option>
          </Form.Control>
        </Form.Group>
        {/* <TipoQuestaoSelect className="col-md-12" 
                           value={this.state.tipoQuestao} 
                           onClick={() => this.setState.tipoQuestao}>            
        </TipoQuestaoSelect> */}
        <br></br>
        <div id="alternativasId"></div>
        <SubmitButton
          text='Cadastrar'
          className='col-md-12 mx-auto'
          onClick={() => this.cadastrar()}
        >

        </SubmitButton>
        <br></br>
        <CadastrarButton
          text='Voltar'
          className='col-md-12 mx-auto'
          onClick={() => this.voltar()}
        >

        </CadastrarButton>

      </div>
    );
  }
}

export default CadastroQuestaoForm;
