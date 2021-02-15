import React, { Component } from "react";
import Select from 'react-select';
import { withRouter } from "react-router-dom";
import axios from 'axios'
import { Row, Col} from 'react-bootstrap';

class Pagina extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }

  async getOptions(){
    const res = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.nome

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <Row className="no-gutters justify-content-center mt-5">
        <Col md={12} className="text-center my-5">
          <h5>LISTA DE ESTADOS</h5>
        </Col>
        <div>
          <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
          <p>Você selecionou o estado <strong>{this.state.name}</strong> e o id dele é <strong>{this.state.id}</strong></p>
        </div>
      </Row>
    )
  }
}

export default withRouter(Pagina);