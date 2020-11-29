import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import jsPDF from "jspdf";
import "jspdf-autotable";

import Card from 'react-bootstrap/Card';
import CadastrarButton from './Components/CadastrarButton';
import PDFButton from './Components/SubmitButton';

import DataTable from 'react-data-table-component';

import enadewallpapper from '../assets/enade-wallpapper.png'

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            fontSize: '17px'
        }
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            fontSize: '20px'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const columns = [
    {
        name: 'Matrícula',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Nome',
        selector: 'nome',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Resultado',
        selector: 'valorObtido',
        sortable: true,
    }
];

class Relatorios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            provaId: this.props.provaId,
            fizeramProva: [],
            naoFizeramProva: []
        }
    }
    setInputValue(property, val) {
        this.setState({
            [property]: val
        })
    }
    async componentDidMount() {
        try {
            await this.buscarAlunosFizeramProva()
            await this.buscarAlunosNaoFizeramProva()
        } catch (error) {

        }
    }

    async buscarAlunosFizeramProva() {
        axios.get(`http://localhost:8080/usuario/findallalunosfizeramprova/${this.state.provaId}`).then((response) => {
            this.setInputValue('fizeramProva', response.data)
            console.log(this.state.fizeramProva)
        })
    }
    async buscarAlunosNaoFizeramProva() {
        axios.get(`http://localhost:8080/usuario/findallalunosnaofizeramprova/${this.state.provaId}`).then((response) => {
            this.setInputValue('naoFizeramProva', response.data)
            console.log(this.state.naoFizeramProva)
        })
    }
    gerarPdf(lista, titulo){
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = titulo;
        const headers = [["ID", "Nome", "Email", "Resultado"]];

        const data = lista.map(elt => [elt.id, elt.nome, elt.email, elt.valorObtido]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save(`${titulo}.pdf`)
    }

    async voltar() {

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
            <div>

                <br></br>
                <br></br>
                <PDFButton
                    text="Exportar PDF"
                    className="col-md-12"
                    variant="primary"
                    onClick={()=>this.gerarPdf(this.state.fizeramProva, `Alunos que fizeram a prova ${this.state.provaId}`)}
                >

                </PDFButton>
                <DataTable
                    title="Alunos que fizeram a prova"
                    columns={columns}
                    data={this.state.fizeramProva}
                    customStyles={customStyles}
                />
                <br></br>
                <br></br>
                <PDFButton
                    text="Exportar PDF"
                    className="col-md-12"
                    variant="primary"
                    onClick={()=>this.gerarPdf(this.state.naoFizeramProva, `Alunos que não fizeram a prova ${this.state.provaId}`)}
                >

                </PDFButton>
                <DataTable
                    title="Alunos que não fizeram a prova"
                    columns={columns}
                    data={this.state.naoFizeramProva}
                    customStyles={customStyles}
                />
                <br></br>
                <br></br>
                <CadastrarButton
                    text='Voltar'
                    className='col-md-12 mx-auto'
                    onClick={() => this.voltar()}
                >

                </CadastrarButton>
                <br></br>
                <br></br>
            </div>

        );
    }
}

export default Relatorios;
