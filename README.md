# Docker + React with API

👋 Olá, Seja Bem-vindo(a) ao 'Docker + React with API'(Docker + React com API).

## Sobre o projeto:

Neste tutorial iremos criar um aplicação que irá consultar uma API.

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
docker-compose run --rm web bash
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