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
import Alternativas from './Components/AlternativasTipoQuestObjetiva'

import enadewallpapper from '../assets/enade-wallpapper.png'


class CadastroQuestaoForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      descricao: '',
      alternativaA: '',
      alternativaB: '',
      alternativaC:'',
      alternativaD:'',
      alternativaE:'',
      questaoCorreta: '',
      tipoQuestao: ''
    }
  }

  setInputValue(property, val){
    this.setState({
      [property]: val
    })
  }


  async cadastrar(){
      if(!this.state.descricao){
          return;
      }
      if(!this.state.tipoQuestao){
          return;
      }
      if(!this.state.questaoCorreta){
          return;
      }
      if(!this.state.alternativaA && !this.state.alternativaB && !this.state.alternativaC 
          && !this.state.alternativaD && !this.state.alternativaE){
            return;
      }
      
      axios.post('http://localhost:8080/questao/save',{
        descricao: this.state.descricao,
        alternativaA: this.state.alternativaA,
        alternativaB: this.state.alternativaB,
        alternativaC: this.state.alternativaC,
        alternativaD: this.state.alternativaD,
        alternativaE: this.state.alternativaE,
        questaoCorreta: this.state.questaoCorreta,
        tipoQuestao: this.state.tipoQuestao
      })
      .then((response)=>{
          alert('Questão Cadastrada com sucesso na base!!!');
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

  voltar(){
   
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


  render(){
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
        <br></br>
        <TipoQuestaoSelect className="col-md-12" 
                           value={this.state.tipoQuestao} 
                           onClick={() => this.setState.tipoQuestao}>            
        </TipoQuestaoSelect>
        <br></br>
        <br></br>
        
        <Alternativas disabled={true}> 
          
        </Alternativas>
        
        <SubmitButton
                text='Cadastrar'
                className='col-md-12 mx-auto'
                onClick={ () => this.cadastrar() }
            >
                
        </SubmitButton>
        <br></br>
        <CadastrarButton
                text='Voltar'
                className='col-md-12 mx-auto'
                onClick={ () => this.voltar() }
            >
                
        </CadastrarButton>
        
      </div>
    );
  }
}

export default CadastroQuestaoForm;
