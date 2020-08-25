import React from 'react';

import './App.css';

import Card from './components/layout/Card';

export default () => (
    <div className="App">
        <h2>Teste com Docker e Docker-compose</h2>
        <br/>

        <div className="Cards">
            <Card title="Entendendo o Dockerfile">
                <p>No Dockerfile iremos definir uma imagem personalizada, Como nesse exemplo vamos rodar uma aplicação em ReactJs buscaremos das imagens oficiais do Docker Hub uma versão do Node.</p>

                <pre className="Code">
                | FROM node:12.18.3-alpine <br/>
                | <br/>
                | WORKDIR /app <br/>
                | <br/>
                | ENV PATH /app/node_modules/.bin:$PATH <br/>
                | <br/>
                | COPY package.json ./ <br/>
                | COPY package-lock.json ./ <br/>
                | RUN npm install --silent <br/>
                | RUN npm install react-scripts@3.4.1 -g --silent <br/>
                | <br/>
                | COPY . ./ <br/>
                | <br/>
                | CMD ["npm", "start"] <br/>
                </pre>

                <p>Como pode ser visto estamos usando o node:12.18.3, a tag alpine trás a versão minima do node. Definimos um diretório na raiz do container "/app" e vamos trabalhar a partir dele, setamos o Path logo abaixo e passamos comandos para que nosso container seja montado espelhado no ambiente configurado no Host.</p>    
            </Card>
            <Card title="Entendendo o .dockerignore">
                <p>No .dockerignore vamos simplesmente definir os arquivos que o docker deve ignorar, muito semelhante ao .gitignore.</p>

                <pre className="Code">
                | node_modules <br/>
                | build <br/>
                | .dockerignore <br/>
                | Dockerfile <br/>
                | Dockerfile.prod <br/>
                </pre>

                <p>Note a importância principalmente de definir o node_nodules no .dockerignore, uma vez que desejamos que ele seja montado de acordo com as especificações do container.</p>
            </Card>

        </div>
        
        <div className="Cards">
            <Card maxWidth="100%" title="Entendendo o docker-compose.yml" color="#1FDA9A">
                <p>No docker-compose.yml nos definimos como o container vai ser criado, não confunda com o Dokerfile que definimos a imagem personalizada. É no compose que definimos os volumes, o nome do container e varias outras opções.</p>

                <pre className="Code">
                | version: '3' <br/>
                |  <br/>
                | services: <br/>
                |  <br/>
                |    react-exemple: <br/>
                |        container_name: react-exemple <br/>
                |        build: <br/>
                |           context: ./react-ui <br/>
                |           dockerfile: Dockerfile <br/>
                |        volumes: <br/>
                |           - './react-ui:/app' <br/>
                |           - '/app/node_modules' <br/>
                |        ports: <br/>
                |           - 3000:3000 <br/>
                |        environment: <br/>
                |           - CHOKIDAR_USEPOLLING=true <br/>
                </pre>
            
            <p>Definimos a versão do compose utilizada, e logo abaixo definimos os serviços, os containers que vão ser criados com o comando "up".  Definimos então o serviço "react-exemple" que vai ser o nosso servidor react nesse projeto local e passamos algumas informações que vão ser usadas na construção do container.</p>
            <p>build: Aqui definimos que vamos usar uma imagem personalizada e vamos referenciar o Dockerfile que configuramos. No caso em questão ele esta no diretório './react-ui' e seu nome é Dockerfile.</p>
            <p>volumes: Quando um container para ele perder todas as informações, e nesse caso não queremos isto, então definimos um 'volume', ou seja, definimos que um diretório local vai se refletir para dentro do container. No caso em questão o './react-ui' vai se refletir em '/app' dentro do nosso container. Ou seja sempre que mudarmos algo em './react-ui' essa alteração será imediatamente refletida no nosso servidor.</p>
            <p>ports: Aqui relacionamos a porta do host (sua maquina local), e a qual porta ela está relacionada dentro do container. Não necessariamente tem que ser a mesma porta, pode usar a porta 3000 no host e a 80 no container por exemplo. ps(lembre-se de que um container não pode está escutando uma porta que já está sendo usada, ou seja, não configure duas aplicações ouvindo a mesma porta).</p>
            <p>environment: ' - CHOKIDAR_USEPOLLING=true ' é uma opção onde informamos para o Docker ouvir as alterações nas pastas montadas.</p>
            </Card>
        </div>
    </div>
);