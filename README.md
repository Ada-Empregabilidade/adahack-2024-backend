# Problemáticas da Corp Solutions

- Falta de dados atuais sobre diversidade e minorias nos quadros da Corps Solutions e futura inclusão das minorias para que se tenha uma equipe diversa.

## Requisitos não funcionais

- Desenvolvido com a arquitetura API REST.
- Desenvolvido na linguagem Javascript e Node.js, com o uso da biblioteca Express.js, acessado na porta 3000.
- Banco de dados do tipo PostgreSQL.
- Arquitetura da API será Model-View-Controller.
- Cobertura de 100% com testes unitários, usando a ferramenta Jest.
- Deploy da API na nuvem, usando Vercel / Railway / AWS ???
- Gerenciador de pacotes NPM.
- Swagger para modelagem da API
- Acesso da API será restringida à rede privada da empresa.

## Requisitos funcionais

- Os tipos de usuários da API serão: admin, gestor e funcionário.
- A API deve permitir o cadastro de apenas um usuário admin.
- Grupos de diversidade presentes: gênero, cor, orientação sexual, PCD, estrangeiro, maior de 60 anos.
- A tabela usuários terá os atributos e tipos de dados: ID (int), nome (string), sobrenome (string), cargo (string), e-mail (string), senha criptografada (string), salt (string), nacionalidade (string), maior de 60 anos (boleano), nível de escolaridade (string), gênero (boleano), cor (boleano), orientação sexual (boleano), PCD (boleano), tipo de usuario (string).
- A tabela grupos de diversidade terá os atributos e tipos de dados: ID (int), minoria (string), total atual (int), porcentagem meta (decimal) e gap (int).
- Será usado o ORM Sequelize, para criação de modelos de dados persistentes.
- Os indicadores devem exibir o nome do grupo minoritário, o total contratado, a meta de contratação, e o gap entre estes.
- Documentação dos endpoints será feita usando a ferramenta Swagger.

## Documentação da API

#### Rota do Admin : Ciar Gestor

```http
  POST /api/admin/manager
```

#### Rota do Gestor : Ciar Funcionário

```http
  POST /api/manager/employee
```

#### Rota do Gestor : Listar Funcionários

```http
  GET /api/manager/employee
```

#### Rota do Gestor : Detalahar Funcionário

```http
  GET /api/manager/employee/:id
```

#### Rota do Gestor : Atualizar Funcionário

```http
  PUT /api/manager/employee/:id
```

#### Rota do Gestor : Deletar Funcionário

```http
  DELETE /api/manager/employee/:id
```

#### Rota do Funcionário: Editar seus dados

```http
  PUT /api/employee/profile
```

#### Rota do Indicador por Gênero

```http
  GET /api/groups/gender
```

#### Rota do Indicador por Cor

```http
  GET /api/groups/color
```

#### Rota do Indicador por Orientação Sexual

```http
  GET /api/groups/sexual-orientation
```

#### Rota do Indicador por Pessoa com Deficiência

```http
  GET /api/groups/handicapped-person
```

#### Rota do Indicador por Nacionalidade

```http
  GET /api/groups/foreign
```

#### Rota do Indicador por maiores de 60 anos

```http
  GET /api/groups/seniors
```

## Setup

- Clone o repositório;
- Instale as dependências (`npm install`);
- Copie `.env.example` file;
- Rode a aplicação (`npm run start`);
- Rode os testes (`npm run test`);

## Autores

- [@BrunoZarth](https://github.com/BrunoZarth)
- [@djairdj](https://github.com/djairdj)
- [@dev-gsilv](https://github.com/dev-gsilv)
- [@heloeng](https://github.com/heloeng)
- [@marcellaamazonas](https://github.com/marcellaamazonas)
- [@Mariano-JR](https://github.com/Mariano-JR)
- [@PatrickVilhena](https://github.com/PatrickVilhena)
