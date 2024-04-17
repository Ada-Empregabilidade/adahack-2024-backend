# **ADAHACK | BE - 5**

## Participantes
- [@allexandrecardos](https://github.com/allexandrecardos)
- [@LuisOtavio1](https://github.com/LuisOtavio1)
- [@RubensLFerreira](https://github.com/RubensLFerreira)
- [@almeidapietra](https://github.com/almeidapietra)
- [@pedrohrds1921](https://github.com/pedrohrds1921)
- [@ZanetteCiriaco](https://github.com/ZanetteCiriaco)
___

## Repositório Original

_Link: <a>https://github.com/allexandrecardos/adahack</a>_

## Melhorias

- Leitura e _import_ de outras plataformas e formatos
- Melhoria da filtragem e dos pesos nas pesquisas
- Melhoria na estrutura
- Dashboard de visualização
- Validações
- Expansão da modelagem de dados (banco & _schemas_)
- Documentação Swagger
- Melhoria do ranqueamento

## Proposta

A API consiste em um sistema de RH dinâmico e eficiente para currículos/candidatos, contendo um filtro com diversos e diferentes campos de pesquisa, com foco em diversidade. A API, de acordo com a filtragem escolhida pelo usuário, retorna os candidatos mais aderentes à pesquisa. Além do filtro já pré-selecionado, também podem ser adicionados pesos à pesquisa para ranquear os candidatos dentro da lista. É possível importar registros através de um arquivo CSV para alimentar o banco de talentos.

## Arquitetura

A arquitetura é voltada para a Clean Architecture, distribuindo as funções de forma eficiente em cada parte do código, desestruturando e removendo a complexidade da estrutura. Outro ponto importante foi o desenvolvimento em sua maioria orientado ao paradigma funcional.

A utilização da Clean Architecture é uma abordagem que visa separar as preocupações dentro de um sistema, garantindo a sua manutenibilidade e escalabilidade. Ao desestruturar a complexidade, a arquitetura torna-se mais fácil de entender e modificar, contribuindo para um desenvolvimento mais eficiente e sustentável a longo prazo.

O enfoque no paradigma funcional também traz benefícios significativos, especialmente em termos de legibilidade, reutilização de código e capacidade de testar as funções de forma isolada. Isso pode resultar em um código mais conciso e menos propenso a erros, além de promover uma abordagem mais declarativa e expressiva para resolver problemas.

## Stacks

| Stack   | Version       | 
| :---------- | :--------- | 
| node | 20.11.1 | 
| typescript | ^5.4.5 | 
| express | ^4.19.2 | 
| prisma | ^5.12.1 | 
| prettier | ^3.2.5 | 
| eslint | ^8.57.0 | 
| dotenv | ^16.4.5 | 
| multer | ^1.4.5-lts.1 | 
| csv-parser | ^3.0.0 | 
| bcrypt | ^5.1.1 | 
| http-status-codes | ^2.3.0 | 
| jsonwebtoken | ^9.0.2 | 
| yup | ^1.4.0 | 
| cors | ^2.8.5 | 

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`DATABASE_URL`

`JWT_SECRET`

## Instalação

1. Instalação das dependências
- Dependência: [NodeJS](https://nodejs.org/en/download)
```
npm install
```

2. Crie o **.env** na raiz do projeto, copie e cole o conteúdo do **.env.example**

3. Subir banco de dados **[ PostgreSql ]**
- Dependência: [Docker](https://www.docker.com/get-started/)
```
docker compose up -d
```

4. Executar migrate prisma **[ Criação das tabelas ]**
```
npx prisma migrate dev
```

5. Buildar o projeto
```
npm run build
```

6. Executar o servidor
```
npm run start
```

7. Importe os dados para o banco usando o arquivo **database/candidates.csv** usando a rota de **candidates/upload**.
- Os dados desse CVS foram gerados por IA e contém dados duplicados.

8. Acessar a API
- Rotas: [Endpoints](#Endpoints)
```
http://localhost:8080
```

## Endpoints

### Consultar todos os candidatos
```http
  GET /candidates
```
___

### Criar um único candidato
```http
  POST /candidates
```

| Parâmetro         | Tipo     | Descrição                            |
| ----------------- | -------- | ----------------------------------- |
| nome              | string   | **Obrigatório**.Nome do usuário                     |
| data_nascimento             | string   | **Obrigatório**.Idade do usuário                    |
| telefone          | string   | **Obrigatório**.Número de telefone do usuário       |
| email             | string   | **Obrigatório**.Endereço de e-mail do usuário       |
| etnia             | string   | **Obrigatório**.Etnia do usuário                    |
| genero            | string   | **Obrigatório**.Gênero do usuário                   |
| graduacao         | string   | **Obrigatório**.Nível de graduação do usuário       |
| senioridade       | string   | **Obrigatório**.Nível de senioridade do usuário     |
| cidade            | string   | **Obrigatório**.Cidade do usuário                   |
| bairro            | string   | **Obrigatório**.Bairro do usuário                   |
| estado            | string   | **Obrigatório**.Estado do usuário                   |
| pcd               | boolean   | **Obrigatório**.Indicação de deficiência do usuário |
| infos_tecnicas    | string   | **Obrigatório**. Informações técnicas do usuário     |
| funcionario_interno | boolean  | **Obrigatório**.Indicação se é funcionário interno  |
___

### Filtros específicos
```http
  GET /candidates/filter
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| infos_tecnicas | `array` | **Obrigatório**. Informações técnicas do usuário |
| campo | `custom` | Campos de filtro [ etnia, genero, cidade, senioridade ] |

___

### Importar candidatos para o banco de talentos (CSV)

```http
  GET /candidates/upload
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `file` | `File` | **Obrigatório**. Arquivo CSV no com os headers abaixo |

| Headers   |
| :---------- | 
| nome |
| idade |
| idade |
| telefone |
| email |
| etnia |
| genero |
| graduacao |
| senioridade |
| cidade |
| bairro |
| estado |
| pcd |
| funcionario_interno |
___

### Criar um usuário
```http
  POST /register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email`     | `string`   | **Obrigatório**. O endereço de e-mail do usuário. |
| `password`  | `string`   | **Obrigatório**. A senha do usuário para autenticação. |


___

### Logar/Acessar API
```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email`     | `string`   | **Obrigatório**. O endereço de e-mail do usuário. |
| `password`  | `string`   | **Obrigatório**. A senha do usuário para autenticação. |

___