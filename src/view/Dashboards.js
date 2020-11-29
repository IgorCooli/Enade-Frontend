import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import VoltarButton from './Components/CadastrarButton';
import PDFButton from './Components/SubmitButton';

import DataTable from 'react-data-table-component';

import enadewallpapper from '../assets/enade-wallpapper.png'

import { Pie, Bar } from 'react-chartjs-2';


class Dashboards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            provaId: this.props.provaId,
            fizeramProva: [],
            naoFizeramProva: [],
            ultimos10: []
        }
    }
    setInputValue(property, val) {
        this.setState({
            [property]: val
        })
    }

    pieDash() {

        const dash = {
            labels: ['Fizeram a prova %', 'Não fizeram a prova %'],
            datasets: [
                {
                    backgroundColor: [
                        '#4169E1',
                        '#FF69B4',
                    ],
                    hoverBackgroundColor: [
                        '#191970',
                        '#C71585',
                    ],
                    data: [this.calculaPorcentagemFizeram(), this.calculaPorcentagemNaoFizeram()],
                }
            ]
        }
        return dash;
    }


    barDash() {

        const dash = {
            labels: this.labelsAlunos(),
            datasets: [
                {
                    backgroundColor: [
                        '#836FFF',
                        '#00FFFF',
                        '#00FF7F',
                        '#DAA520',
                        '#FF69B4',
                        '#B22222',
                        '#FFFF00',
                        '#E0FFFF',
                        '#40E0D0',
                        '#708090'
                    ],
                    hoverBackgroundColor: [
                        '#483D8B',
                        '#008080',
                        '#006400',
                        '#8B4513',
                        '#DC143C',
                        '#800000',
                        '#FFD700',
                        '#B0E0E6',
                        '#008B8B',
                        '#363636'
                    ],
                    data: this.notasAlunos(),
                }
            ]
        }
        return dash;
    }

    async componentDidMount() {
        try {
            await this.buscarAlunosFizeramProva()
            await this.buscarAlunosNaoFizeramProva()
            await this.buscarUltimos10Alunos()
        } catch (error) {

        }
    }

    async buscarAlunosFizeramProva() {
        axios.get(`http://localhost:8080/usuario/findallalunosfizeramprova/${this.state.provaId}`).then((response) => {
            this.setInputValue('fizeramProva', response.data)
        })
    }
    async buscarAlunosNaoFizeramProva() {
        axios.get(`http://localhost:8080/usuario/findallalunosnaofizeramprova/${this.state.provaId}`).then((response) => {
            this.setInputValue('naoFizeramProva', response.data)
        })
    }

    async buscarUltimos10Alunos() {
        axios.get(`http://localhost:8080/resultado/findultimosdezalunos/${this.state.provaId}`).then((response) => {
            this.setInputValue('ultimos10', response.data)
            console.log(this.state.ultimos10)
        })
    }

    labelsAlunos() {
        let labels = []
        this.state.ultimos10.forEach(element => {
            labels.push(element.email)
        });
        console.log(labels)
        return labels
    }

    notasAlunos() {
        let notas = []
        this.state.ultimos10.forEach(element => {
            notas.push(element.valorObtido)
        });
        console.log(notas)
        return notas
    }

    calculaPorcentagemFizeram() {
        let total = this.state.fizeramProva.length + this.state.naoFizeramProva.length

        return (this.state.fizeramProva.length / total) * 100
    }

    calculaPorcentagemNaoFizeram() {
        let total = this.state.fizeramProva.length + this.state.naoFizeramProva.length

        return (this.state.naoFizeramProva.length / total) * 100
    }


    gerarPdf(className) {

        let input = window.document.getElementsByClassName(className)[0];

        console.log(className)

        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        html2canvas(input).then(canvas => {
            const img = canvas.toDataURL("image/png");
            const pdf = new jsPDF(orientation, unit, size);
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(
                img,
                "png",
                0,
                0,
                width,
                height
            );
            pdf.save(`Dashboards a prova ${this.state.provaId}.pdf`);
        });
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
                    onClick={(e) => this.gerarPdf("divDashboards")}
                >

                </PDFButton>
                <div className="divDashboards">
                    <div className="dashboardCard pieDash">
                        <Pie
                            data={this.pieDash()}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Porcentagem de alunos que fizeram a prova vs alunos que não fizeram a prova',
                                    fontSize: 20,
                                    fontColor: '#808080',
                                    fontFamily: 'Roboto',
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom',
                                }

                            }}
                            height={150}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="dashboardCard barDash">
                        <Bar
                            data={this.barDash()}
                            options={{
                                title: {
                                    display: true,
                                    text: "Notas dos 10 últimos alunos",
                                    fontSize: 20,
                                    fontColor: '#808080',
                                    fontFamily: 'Roboto',
                                },
                                legend: {
                                    display: false,
                                    position: 'bottom',
                                },
                                scales: {
                                    yAxes: [{
                                        stacked: true,
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: 10
                                        }
                                    }]
                                }
                            }}
                            height={150}
                        />
                    </div>
                </div>
                <br></br>
                <VoltarButton
                    text='Voltar'
                    className='col-md-12 mx-auto'
                    onClick={() => this.voltar()}
                >

                </VoltarButton>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Dashboards;
