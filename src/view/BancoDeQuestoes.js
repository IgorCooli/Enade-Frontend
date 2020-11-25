import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import TipoUsuarioSelect from './Components/TipoUsuarioSelect';
import CadastrarButton from './Components/CadastrarButton';
import UserStore from '../store/UserStore'
import LoginForm from './LoginForm';
import QuestaoDiscursivaCard from './Components/QuestaoDiscursivaCard'
import QuestaoObjetivaCard from './Components/QuestaoObjetivaCard'
import DesativarButton from './Components/SubmitButton'

import enadewallpapper from '../assets/enade-wallpapper.png'


class BancoDeQuestoes extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      listaQuestoes: []
    }
  }
  setInputValue(property, val){
    this.setState({
      [property]: val
    })
  }

  async componentDidMount(){
    try {
        this.buscarQuestoes()
    } catch (error) {

    }
  }


  async buscarQuestoes(){
    axios.get('http://localhost:8080/questao/findall')
    .then((response)=>{
        this.setInputValue('listaQuestoes', response.data)
        console.log(response.data)
    })

  }



  async cadastrar(){
      if(!this.state.nome){
          return;
      }
      if(!this.state.email){
          return;
      }
      if(!this.state.senha){
          return;
      }
      
      axios.post('http://localhost:8080/usuario/save',{
          nome: this.state.nome,
          email: this.state.email,
          senha: this.state.senha,
          tipo: 'Professor'
      })
      .then((response)=>{
          alert('Usuário cadastrado com sucesso!!!');
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

  async voltar(){
   
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

async atualizaQuestao(id){

    axios.get(`http://localhost:8080/questao/atualizaestado/${id}`)
    .then((response)=>{
        alert(`${response.data}`)
        this.buscarQuestoes();
        this.render();
    })
}

  render(){
    return (
      <div className="questoesDiv col-md-8 mx-auto text-center">
        
        {this.state.listaQuestoes.map((questao, index)=>{
            if(questao.tipoQuestao == 1){
                return <div className="row col-md-12">
                    <QuestaoDiscursivaCard
                            nroQuestao={index + 1}
                            descricao={questao.descricao}
                            ativo={questao.estado==1? 'Ativo' : 'Não ativo'}
                        >

                    </QuestaoDiscursivaCard>
                    <DesativarButton
                            className="col-md-12 mx-auto"
                            disabled={false}
                            onClick={()=> this.atualizaQuestao(questao.id)}
                            text={questao.estado==1? 'Desativar' : 'Ativar'}
                        >

                    </DesativarButton>
                </div>
            }else{
                return <div className="row col-md-12">
                <QuestaoObjetivaCard
                        nroQuestao={index + 1}
                        descricao={questao.descricao}
                        ativo={questao.estado==1? 'Ativo' : 'Não ativo'}
                        alternativaA={questao.alternativaA}
                        alternativaB={questao.alternativaB}
                        alternativaC={questao.alternativaC}
                        alternativaD={questao.alternativaD}
                        alternativaE={questao.alternativaE}
                    >

                </QuestaoObjetivaCard>
                <DesativarButton
                        className="col-md-12 mx-auto"
                        disabled={false}
                        onClick={()=> this.atualizaQuestao(questao.id)}
                        text={questao.estado==1? 'Desativar' : 'Ativar'}
                    >

                </DesativarButton>
            </div>
            }
            
        })}

        <br></br>
        <CadastrarButton
                text='Voltar'
                className='col-md-12 mx-auto'
                onClick={ () => console.log(this.state.listaQuestoes) }
            >
                
        </CadastrarButton>
        
      </div>
    );
  }
}

export default BancoDeQuestoes;
