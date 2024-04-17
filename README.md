# Ada Hack 2024 </> BE-3

## Índice
1. Apresentação do case
2. Objetivos
3. Problemática
4. Planejamento
5. Tecnologias utilizadas
6. Documentação da API
7. Setup
8. Autores

***

## 1. Apresentação do case
#### Case: A Jornada da Corp Solutions rumo à Diversidade e Inclusão
Contexto Histórico
Nos últimos anos, temos testemunhado uma mudança significativa no mundo organizacional em direção à valorização da diversidade e inclusão. À medida que a sociedade evolui, as empresas reconhecem cada vez mais os benefícios de uma força de trabalho diversificada, incluindo maior inovação, criatividade e desempenho financeiro. Além disso, movimentos sociais e pressões externas têm levado as empresas a adotarem práticas mais inclusivas e equitativas.

#### O Desafio da Corp Solutions
A Corp Solutions, uma empresa líder no mercado de tecnologia para recursos humanos, recentemente recebeu um aporte milionário de uma grande corporação dos Estados Unidos. Como parte de seu compromisso em se tornar uma referência no mercado e em promover um ambiente de trabalho diverso e inclusivo, a Corp Solutions identificou a necessidade de aumentar a diversidade dentro de sua própria equipe.

A Corp Solutions acredita que a diversidade não é apenas uma questão de representatividade, mas sim uma oportunidade de impulsionar a inovação, a criatividade e o sucesso dos negócios. Reconhecendo a importância de um ambiente de trabalho inclusivo, a empresa está empenhada em criar uma cultura onde todas as vozes sejam ouvidas, valorizadas e respeitadas.

A Corp Solutions é uma empresa de consultoria empresarial que se destaca pela venda de softwares inovadores para RH. Recentemente, a empresa recebeu um aporte de uma grande corporação dos Estados Unidos, impulsionando sua expansão e reforçando seu compromisso em investir em iniciativas de diversidade.

**Setor de atuação**: Atua no setor de tecnologia para recursos humanos, oferecendo uma variedade de produtos e serviços para ajudar as empresas a melhorar sua cultura organizacional, práticas de recrutamento e retenção de talentos diversos.

**Cultura organizacional**: Inovação, excelência, colaboração e compromisso com a diversidade e inclusão. A empresa acredita que equipes diversas são essenciais para impulsionar a inovação e o crescimento sustentável das organizações. Além disso, valoriza a transparência, a ética e o foco no cliente em todas as suas operações.

**Número de colaboradores**: Com o recente investimento, a empresa planeja expandir sua equipe, dobrando o número de colaboradores até o final de 2025, atingindo o número de 850 pessoas dentro da corporação.

**Formato do modelo de trabalho**: A Corp Solutions adota um modelo de trabalho flexível, que inclui opções de trabalho remoto e horários flexíveis.

#### O Desafio do Hackathon
Diante desse cenário, a Corp Solutions convoca equipes de talentos criativos e inovadores para desenvolverem soluções que ajudem a empresa a alcançar seu objetivo de aumentar a diversidade e a inclusão em sua equipe. As equipes terão acesso aos dados da empresa e aos recursos necessários para desenvolverem soluções eficazes e impactantes.

#### Objetivos do case
Identificar oportunidades de aumentar a diversidade na Corp Solutions.
Desenvolver soluções criativas, aplicáveis e inovadoras para promover a inclusão e equidade no ambiente de trabalho.
Contribuir para a construção de uma cultura organizacional diversa, inclusiva e sustentável.

#### Materiais de apoio e instruções por trilha
O desafio para a trilha backend é projetar e implementar uma API robusta e escalável para o sistema de RH da empresa. Eles devem considerar os requisitos de segurança, desempenho e escalabilidade, garantindo uma integração eficiente com a interface de usuário desenvolvida.
#### Entregáveis
1. API funcional e escalável, desenvolvida com base nos requisitos estabelecidos, utilizando Node.js e Express.
2. Documentação técnica detalhada, descrevendo a arquitetura da API, as tecnologias utilizadas e as principais decisões de design, incluindo modelos de dados e estrutura de rotas.
3. Apresentação final do projeto, demonstrando as funcionalidades implementadas na API e explicando as decisões de design tomadas durante o processo de desenvolvimento do backend.

## 2. Objetivos

Nossa equipe de desenvolvedores recebeu o desafio de  implementar um programa que fornecesse a possibilidade de melhoria nos processos de quantificação e expansão da Corp Solutions em oito dias.

## 3. Problemática

- Após análise criteriosa do case, identificamos a falta de dados atuais sobre diversidade e minorias nos quadros da Corp Solutions. Para alcançar seus objetivos corporativos, os líderes da empresa devem buscar a inclusão de distintas minorias, para conseguir uma equipe diversa e inovadora.

## 4. Planejamento 
### 1. Requisitos não funcionais

- Desenvolvido com a arquitetura API REST.
- Desenvolvido na linguagem Javascript e Node.js, com o uso da biblioteca Express.js, acessado na porta 3000.
- Banco de dados do tipo PostgreSQL.
- Arquitetura da API será Model-View-Controller.
- Gerenciador de pacotes NPM.
- Acesso da API será restringida à rede privada da empresa.

### 2. Requisitos funcionais

- Os tipos de usuários da API serão: admin, gestor e funcionário.
- A API deve permitir o cadastro de apenas um usuário admin.
- Grupos de diversidade presentes: gênero, etnia, orientação sexual, PCD, maior de 60 anos.
- A tabela usuários terá os atributos e tipos de dados: ID (UUID), nome (string), sobrenome (string), cargo (string), e-mail (string), nacionalidade (string), maior de 60 anos (boleano), nível de escolaridade (string), gênero (boleano), etnia (boleano), orientação sexual (boleano), PCD (boleano), tipo de usuario (string).
- Será usado o ORM Sequelize.
- Os indicadores de diversidade devem exibir o nome do grupo minoritário e o total de funcionários contratados.
- Documentação dos endpoints será feita usando a ferramenta Swagger.

## 5. Tecnologias utilizadas
> Node.js, Express.js, PostgreSQL, Sequelize, Swagger.

## 6. Documentação da API

#### Rota do Admin : Criar Gestor

```http
  POST /api/admin/manager
```

#### Rota do Gestor : Criar Funcionário

```http
  POST /api/manager/employee
```

#### Rota do Gestor : Listar Funcionários

```http
  GET /api/manager/employee
```

#### Rota do Gestor : Detalhar Funcionário

```http
  GET /api/manager/employee/:id
```

#### Rota do Gestor : Atualizar Funcionário

```http
  PUT /api/manager/employee/:id
```

#### Rota do Gestor : Remover Funcionário

```http
  DELETE /api/manager/employee/:id
```

#### Rota do Funcionário: Editar seus dados

```http
  PUT /api/employee/profile
```

#### Rota do Indicador por grupo individual

```http
  GET /api/employee/group/:name
```
#### Rota dos Indicadores agrupados

```http
  GET /api/employee/groups
```

#### Rota para acesso ao Swagger

```http
  GET /api-docs
```


## 7. Setup

- Clone o repositório;
- Instale as dependências (`npm install`);
- Crie um arquivo`.env`, como o exemplo abaixo, na raíz do diretório;
>PORT=3000
>
>DB='corp_solutions'
>
>DB_USER='postgres'
>
>PASSWORD='admin'
>
>HOST='localhost'
>
>dialect='postgres'

- Execute o banco de dados Postgres localmente, usando as credenciais configuradas no arquivo `.env`.
- Rode a integração com o Swagger: `npm run swagger`;
- Rode a aplicação (`npm run start`);

## 8. Autores

- [@djairdj](https://github.com/djairdj)
- [@dev-gsilv](https://github.com/dev-gsilv)
- [@heloeng](https://github.com/heloeng)
- [@marcellaamazonas](https://github.com/marcellaamazonas)
- [@Mariano-JR](https://github.com/Mariano-JR)
