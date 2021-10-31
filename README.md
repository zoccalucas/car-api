# 🚗 Aluguel de Carros

Aplicação de aluguel de carros feita com [NodeJs](https://nodejs.org/en/). Onde, é possível cadastrar um usuário, cadastrar um carro e suas especificações e cadastrar um aluguel.
Esta API foi desenvolvida seguindo o padrão de arquitetura limpa [SOLID](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html), da Programação Orientada a Objetos.

---

## ⚙️ Tecnologias utilizadas:

Segue abaixo as principais dependências utilizadas nesta API:

- [Express](https://expressjs.com/pt-br/);
- [TypeScript](https://www.typescriptlang.org/);
- [TypeORM](https://typeorm.io/#/).

Outras dependências utilizadas no desenvolvimento:
- [Uuid](https://www.npmjs.com/package/uuid);
- [Multer](https://www.npmjs.com/package/multer);
- [Csv-Parse](https://www.npmjs.com/package/csv-parse).


Também, foram utilizadas as seguintes ferramentas para manter o código limpo e padronizado:

- [Prettier](https://prettier.io/);
- [ESLint](https://eslint.org/);
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

Para a documentação foi utilizado o [Swagger](https://swagger.io/).

Para os containers foi utilizado o [Docker](https://docs.docker.com/get-docker/).

---

## 📁 Como executar o projeto:

### 🚀 Com Yarn:

-  Instale o [NodeJs](https://nodejs.org/en/)

-  Instale o [Yarn](https://yarnpkg.com/)

-  Execute os comandos abaixo no terminal:

```bash
  #Clona o repositório
  $ git clone https://github.com/zoccalucas/car-api.git

  #Acessa o diretório do projeto
  $ cd car-api

  #Instala as dependências
  $ yarn install

  #Cria as tabelas do banco de dados
  $ yarn typeorm migration:run

  #Executa a aplicação
  $ yarn dev
```

### 💻 Com NPM:

-  Instale o [NodeJs](https://nodejs.org/en/)

-  Execute os comandos abaixo no terminal:

```bash
  #Clona o repositório
  $ git clone https://github.com/zoccalucas/car-api.git

  #Acessa o diretório do projeto
  $ cd car-api

  #Instala as dependências
  $ npm install

  #Cria as tabelas do banco de dados
  $ npm run typeorm migration:run

  #Executa a aplicação
  $ npm run dev
```

- A API está rodando na porta 3333

- Visualize a documentação na rota `http://localhost:3333/api-docs`

---
#### **🛠️ API em desenvolvimento 🛠️**

