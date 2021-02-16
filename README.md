# Docker + React with API

👋 Olá, Seja Bem-vindo(a) ao 'Docker + React with API'(Docker + React com API).

## Sobre o projeto:

Neste tutorial iremos criar um aplicação que irá consultar a [API do IBGE](https://servicodados.ibge.gov.br/api/v1/localidades/estados/) para popular o componente select.

### Permissões de arquivos:

Ao se adicionar libs ou qualquer outro comando que crie arquivos dentro do contâiner Docker o proprietário para edição se torna o contâiner, sendo assim você precisará rodar o comando abaixo para alterar essas permissões e você poder editar:

```sh
sudo chown -R $USER:$USER .
```

## Criando a aplicação:

1. [Criar uma aplicação react](https://github.com/claudimf/docker_react_multi_page)


2. Instalar o [axios](https://www.npmjs.com/package/react-axios) e o [react-select](https://www.npmjs.com/package/react-select):
```sh
docker-compose run --rm frontend npm install axios react-select --save
```

3. No arquivo [Pagina.jsx](https://github.com/claudimf/react_with_api/blob/main/frontend/src/components/Pagina.jsx) criar o seguinte conteúdo:

```sh
import React, { Component } from "react";
import Select from 'react-select';
import { withRouter } from "react-router-dom";
import axios from 'axios'
import { Row, Col} from 'react-bootstrap';

class Pagina extends Component {
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
```
### Explicando o código:

Abaixo temos a biblioteca 'axios' para criação de um cliente HTTP para interação com as APIs:

```sh
import React, { Component } from "react";
import Select from 'react-select';
import { withRouter } from "react-router-dom";
import axios from 'axios'
import { Row, Col} from 'react-bootstrap';
```
Utilizaremos o construtor do react para utilizar o estado(state) para guarda o ID e o Name do elemento selecionado, também as opções disponíveis no Select:

```sh
class Pagina extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }
```

Criaremos uma função assíncrona para carregar os dados do IBGE para o componente select:

```sh
  async getOptions(){
    const res = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.nome

    }))

    this.setState({selectOptions: options})

  }
```

Utilizaremos o [handleChange](https://pt-br.reactjs.org/docs/forms.html) para verificar as mudanças ocorridas pelos usuário:

```sh
  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }
```

Aqui utilizaremos o [componentDidMount](https://pt-br.reactjs.org/docs/react-component.html#componentdidmount) para montar o componente:


```sh
  componentDidMount(){
      this.getOptions()
  }
```

Por fim iremos renderizar o componente select e retornar no console o array incorporado nele:

```sh
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
```

Abaixo segue o funcionamento:

![Funcionamento](https://raw.githubusercontent.com/claudimf/react_with_api/main/funcionamento.gif)

## Ponto de atenção:

No arquivo [gitignore](https://github.com/claudimf/docker_react_multi_page/blob/main/frontend/.gitignore) retire a pasta 'node_modules', assim você evitará de ter que criar toda ver que construir sua aplicação facilitando o deploy.

## 🐳 Caso você só queira baixar o projeto, poderá entrar no 'Modo Desenvolvimento com Docker':

Após instalar o docker e docker-compose, estando na pasta raiz do projeto, execute:

```sh
docker-compose up
```

Para se certificar que os seus containers subiram corretamente, todos os containers deve estar com o status `UP`, execute:

```sh
docker-compose ps -a
```

Para acessar o container da aplicação, execute:

```sh
docker-compose run --rm frontend bash
```

Para derrubar e subir a instância do docker novamente, execute:

```sh
docker-compose down && docker-compose up
```

🚀 :clap: Para visualizar o sistema basta acessar no navegador no endereço: [localhost:3000](http://localhost:3000/)

# Referências utilizadas

[1° Docker + React Multi-Page](https://github.com/claudimf/docker_react_multi_page)

[2° React select dropdown tutorial using react-select.](https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3)


[3° API do IBGE para popular o select](https://servicodados.ibge.gov.br/api/docs/localidades)