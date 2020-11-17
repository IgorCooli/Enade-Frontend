import React from 'react'
import Form from 'react-bootstrap/Form';



class AlternativasTipoQuest extends React.Component{
    render(){
      return (
          
        <Form.Group>

            <Form.Control  className={this.props.className}
                            type={this.props.type}
                            placeholder="Alternativa A"
                            value={this.props.value}
                            onChange={ (e) => this.props.onChange(e.target.value) }
                            disabled={this.props.value}
                            />
            
            <Form.Control  className={this.props.className}
                            type={this.props.type}
                            placeholder="Alternativa B"
                            value={this.props.value}
                            onChange={ (e) => this.props.onChange(e.target.value) }
                            disabled={this.props.value}
                            />

            <Form.Control  className={this.props.className}
                            type={this.props.type}
                            placeholder="Alternativa C"
                            value={this.props.value}
                            onChange={ (e) => this.props.onChange(e.target.value) }
                            disabled={this.props.value}
                            />

            <Form.Control  className={this.props.className}
                            type={this.props.type}
                            placeholder="Alternativa D"
                            value={this.props.value}
                            onChange={ (e) => this.props.onChange(e.target.value) }
                            disabled={this.props.value}
                            />

            <Form.Control  className={this.props.className}
                           type={this.props.type}
                           placeholder="Alternativa E"
                           value={this.props.value}
                           onChange={ (e) => this.props.onChange(e.target.value) }
                           disabled={this.props.value}
                           />

        </Form.Group>
        
          
      );
    }
  }

  export default AlternativasTipoQuest;