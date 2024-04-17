# API do Formulário de Diversidade

A API do Formulário de Diversidade é responsável por fornecer as perguntas e opções de resposta para os formulários de diversidade de funcionários internos e candidatos externos.

## Como executar o projeto

Para executar o projeto, siga os passos abaixo:

1. Clone o repositório para a sua máquina local.
    ```bash
    git clone https://github.com/adahack-2024-backend/identity-declaration-api.git
    ```
2. Instale as dependências do projeto.
    ```bash
    npm install
    ```
3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambientes presentes no arquivo `.env.example`.
4. Execute o projeto.
    ```bash
    npm start
    ```

## Endpoints para fornecimento de dados do formulário

### GET /api/diversity/internal/questions

- **Descrição:** Fornece as perguntas do formulário de diversidade para funcionários internos.
- **Método HTTP:** GET
- **URL:** `/api/diversity/internal/questions`
- **Autenticação Requerida:** Sim
- **Parâmetros de Requisição:** Não aplicável.
- **Formato de Resposta Esperado:**
```json
{
  "questions": [
    {
      "id": 1,
      "question": "Qual é sua faixa etária?",
      "options": [
        "Menos de 18 anos",
        "18-24 anos",
        "25-34 anos",
        "35-44 anos",
        "45-54 anos",
        "55-64 anos",
        "65 anos ou mais"
      ]
    },
    {
      "id": 2,
      "question": "Qual é a sua identidade de gênero auto declarada?",
      "options": [
        "Homem cisgênero",
        "Mulher cisgênero",
        "Homem transgênero",
        "Mulher transgênero",
        "Não-binário",
        "Prefiro não dizer",
        "Outro"
      ]
    },
    {
      "id": 3,
      "question": "Qual é a sua identidade étnica/racial auto declarada?",
      "options": [
        "Branco - Caucasiano",
        "Negro - Africano/Afro-americano",
        "Hispânico ou Latino",
        "Asiático",
        "Indígena",
        "Prefiro não dizer",
        "Outro"
      ]
    },
    {
      "id": 4,
      "question": "Você se identifica como LGBTQIAPN+?",
      "options": [
        "Sim",
        "Não",
        "Prefiro não dizer"
      ]
    },
    {
      "id": 5,
      "question": "Você é pai ou mãe?",
      "options": [
        "Sim",
        "Não",
        "Prefiro não dizer"
      ]
    },
    {
      "id": 6,
      "question": "Você é uma pessoa portadora de deficiência?",
      "options": [
        "Deficiência visual",
        "Deficiência auditiva",
        "Deficiência motora",
        "Deficiência intelectual",
        "Deficiência psicossocial",
        "Não possuo deficiência",
        "Prefiro não dizer",
        "Outra"
      ]
    }
  ]
}
```
- **Códigos de Resposta Possíveis: 200 (OK), 401 (Não Autorizado), 500 (Erro Interno do Servidor)**
##

### GET /api/diversity/external/questions

- **Descrição:** Fornece as perguntas do formulário de diversidade para candidatos externos.
- **Método HTTP:** GET
- **URL:** `/api/diversity/external/questions`
- **Autenticação Requerida:** Não
- **Parâmetros de Requisição:** Não aplicável.
- **Formato de Resposta Esperado:**
```json
{
  "questions": [
    {
      "id": 1,
      "question": "Qual é sua faixa etária?",
      "options": [
        "Menos de 18 anos",
        "18-24 anos",
        "25-34 anos",
        "35-44 anos",
        "45-54 anos",
        "55-64 anos",
        "65 anos ou mais"
      ]
    },
    // ...
  ]
}
```
- **Códigos de Resposta Possíveis: 200 (OK), 500 (Erro Interno do Servidor)**
##

### POST /api/diversity/internal/submit

- **Descrição:** Permite a submissão de respostas do formulário de diversidade por funcionários internos.
- **Método HTTP:** POST
- **URL:** `/api/diversity/internal/submit`
- **Autenticação Requerida:** Sim
- **Parâmetros de Requisição:**
```json
{
  "responses": {
    "ageGroupCode": "string",
    "genderCode": "string",
    "ethnicityCode": "string",
    "disabilityCode": "string",
    "lgbtqia": boolean,
    "parent": boolean
  }
}
```
- **Formato de Resposta Esperado:**
```json
{
	"status": "success",
	"message": "Responses submitted successfully."
}
```
- **Códigos de Resposta Possíveis: 200 (OK), 400 (Requisição Inválida), 401 (Não Autorizado), 500 (Erro Interno do Servidor)**
##

### POST /api/diversity/external/submit

- **Descrição:** Permite a submissão de respostas do formulário de diversidade por candidatos externos.
- **Método HTTP:** POST
- **URL:** `/api/diversity/external/submit`
- **Autenticação Requerida:** Não
- **Parâmetros de Requisição:**
```json
{
  "responses": {
    "ageGroupCode": "string",
    "genderCode": "string",
    "ethnicityCode": "string",
    "disabilityCode": "string",
    "lgbtqia": boolean,
    "parent": boolean
  }
}
```
- **Formato de Resposta Esperado:**
```json
{
	"status": "success",
	"message": "Responses submitted successfully."
}
```
- **Códigos de Resposta Possíveis: 200 (OK), 400 (Requisição Inválida), 500 (Erro Interno do Servidor)**
##

### POST /api/login

- **Descrição:** Permite a realização do login dos usuários no sistema.
- **Método HTTP:** POST
- **URL:** `/api/login`
- **Corpo da Requisição:**
```json
{
	"email": "string",
	"password":"string"
}
```
- **Formato de Resposta Esperado:**
```json
{
	"token": "token JWT"
}
```
### POST /api/user

- **Descrição:** Permite a criação de um novo usuário no sistema.
- **Método HTTP:** POST
- **URL:** `/api/user`
- **Corpo da Requisição:**
```json
{
	"email": "string",
	"password":"string"
}
```
- **Formato de Resposta Esperado:**
```json
{
	"id": 0,
	"email": "string"
}
```

### GET /api/users

- **Descrição:** Permite o acesso a lista de usuários cadastrados no sistema.
- **Método HTTP:** GET
- **URL:** `/api/users`
- **Autenticação Requerida:** Sim
- **Formato de Resposta Esperado:**
```json
[
	{
		"id": 0,
		"email": "string",
		"password": "encrypted string",
		"createdAt": "date",
		"updatedAt": "date"
	},
	{
		"id": 0,
		"email": "string",
		"password": "encrypted string",
		"createdAt": "date",
		"updatedAt": "date"
	}, 
  ...
]
```


### GET /diversity/internal/responses

- **Descrição:** Permite o acesso às respostas de diversidade registradas, permitindo filtragem por parâmetros específicos como grupo etário, gênero, etnia, deficiência, LGBTQIA, se é pai/mãe e se a resposta é interna.
- **Método HTTP:** GET
- **URL:** `/diversity/internal/responses`
- **Autenticação Requerida:** Sim
- **Parâmetros de Consulta:** `ageGroupCode`, `genderCode`, `ethnicityCode`, `disabilityCode`, `lgbtqia`, `parent`, `isInternalResponse`
- **Formato de Resposta Esperado:**
```json
{
    "responses": [
        {
            "ageGroup": {
                "code": "string",
                "description": "string"
            },
            "gender": {
                "code": "string",
                "value": "string"
            },
            "ethnicity": {
                "code": "string",
                "value": "string"
            },
            "disability": {
                "code": "string",
                "value": "string"
            },
            "lgbtqia": true,
            "parent": true,
            "isInternalResponse": true,
            "createdAt": "date"
        }
    ]
}
```

### GET /diversity/internal/responses/stats

- **Descrição:** Permite o acesso a estatísticas das respostas de diversidade, com base nos mesmos parâmetros de consulta usados para as respostas individuais, permitindo avaliar a distribuição das respostas e comparar internas e externas.
- **Método HTTP:** GET
- **URL:** `/diversity/internal/responses/stats`
- **Autenticação Requerida:** Sim
- **Parâmetros de Consulta:** `ageGroupCode`, `genderCode`, `ethnicityCode`, `disabilityCode`, `lgbtqia`, `parent`, `isInternalResponse`
- **Formato de Resposta Esperado:**
```json
{
    "queriesUsed": {
        "ageGroupCode": "string",
        "genderCode": "string",
        "ethnicityCode": "string",
        "disabilityCode": "string",
        "lgbtqia": true,
        "parent": true,
        "isInternalResponse": true
    },
    "totalCount": 500,
    "responseCount": 100,    
    "internalCount": 300,
    "externalCount": 200
}
```

## Autenticação

Os candidatos externos não precisam de autenticação para acessar os endpoints `/api/diversity/external/questions` e `/api/diversity/external/submit`.

Já os funcionários internos precisam fornecer um `token` válido em cada requisição aos endpoints `/api/diversity/internal/questions` e `/api/diversity/internal/submit`. O token é obtido no login.

## Segurança HTTPS

A comunicação com a API deve ser feita usando HTTPS para garantir a segurança. Todas as práticas de segurança da indústria são seguidas, incluindo o armazenamento seguro de tokens e a criptografia de informações sensíveis.

## Tecnologias

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
