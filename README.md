# Sistema-cadastro-react

Sistema de cadastro de chamados

## Descrição:

Este projeto é uma aplicação web de sistema de chamados desenvolvida em React e Firebase. Voltada para o gerenciamento de solicitações de atendimento, a aplicação permite que usuários registrem e acompanhem chamados. Além de um painel de chamados, o sistema conta com funcionalidades de personalização de perfil e cadastro de clientes, sendo uma solução prática para organização e rastreamento de atendimentos.

<br/>



## Demonstração:



<br/>



## Tecnologias e Ferramentas:

- <strong>firebase:</strong> Usado para autenticação, banco de dados em tempo real, e armazenamento de dados.
- <strong>react e react-dom:</strong> Bibliotecas principais para a construção da interface e manipulação do DOM em React.
- <strong>react-router-dom:</strong> Gerencia a navegação entre as páginas da aplicação.
- <strong>react-hook-form:</strong> Facilita o gerenciamento de formulários.
- <strong>yup e zod:</strong> Bibliotecas para validação de dados.
- <strong>styled-components:</strong> Permite criar componentes estilizados com CSS-in-JS.
- <strong>react-toastify:</strong> Utilizada para exibir notificações, como alertas de sucesso ou erro.
- <strong>react-modal:</strong> Usada para criar modais.

<br/>



## Instalação:

1- Clone o repositório

Primeiro, clone o repositório do projeto para sua máquina local:
```
git clone https://github.com/felipesl-lopes/Sistema-cadastro-react.git
```

2- Navegue até o diretório do projeto
```
cd Sistema-cadastro-react
```

3- Instale as dependências

Use o npm para instalar todas as dependências listadas no package.json:
```
npm install
```

<br/>



## Configuração do Firebase:

1- Crie um projeto no Firebase.

2- Obtenha as credenciais de configuração do Firebase (chave da API, domínio, ID do projeto, etc.).

3- Crie um arquivo <strong>firebaseConfig.js</strong> na pasta src e adicione suas credenciais:
```
// src/firebaseConfig.js
export const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-auth-domain",
  projectId: "seu-project-id",
  storageBucket: "seu-storage-bucket",
  messagingSenderId: "seu-messaging-sender-id",
  appId: "seu-app-id"
};
```

<br/>



## Funcionalidades:

- <strong>Autenticação de Usuário: </strong> Registro e login de usuários com autenticação usando Firebase.
- <strong>Painel de Chamados: </strong> Exibe uma lista de chamados, com detalhes como nome do cliente, status, assunto e data do chamado. Permite acompanhar e gerenciar todos os chamados.
- <strong>Gerenciamento de Chamados: </strong> Opção de criação de novos chamados, permitindo ao usuário registrar solicitações de atendimento. Funcionalidade para editar chamados existentes, facilitando atualizações ou correções.
- <strong>Perfil do Usuário: </strong> Permite ao usuário personalizar seu perfil, incluindo a opção de alterar a foto e o nome de exibição.
- <strong>Cadastro de Clientes: </strong> Tela dedicada para cadastrar novos clientes, organizando informações e tornando o gerenciamento de atendimentos mais prático.
- <strong>Notificações e Feedback: </strong> Sistema de notificações com react-toastify para feedback em ações importantes, como criação, edição e exclusão de chamados ou clientes.

<br/>



## Executando:

1- Inicie o servidor de desenvolvimento com o seguinte comando:
```
npm start
```

2- Acesse a Aplicação:

Após o comando ser executado com sucesso, acesse a aplicação em [http://localhost:3000](http://localhost:3000).



