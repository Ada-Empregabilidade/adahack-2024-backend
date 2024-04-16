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
- Responsabilidades do usuário admin:
  Cria um novo gestor no sistema.
  Rota: POST /api/admin/manager
  Permissões de Acesso: Apenas admin.
  Descrição: Acessar e alterar todas as demais rotas e recursos.
- Responsabilidades do usuário gestor:
  Criar Funcionário
  Rota: POST /api/manager/employee
  Descrição: Cria um novo funcionário.
  Permissões de Acesso: Apenas gestor.

  Listar Funcionários
  Rota: GET /api/manager/employee
  Descrição: Lista todos os funcionários sob a gestão do gestor logado.
  Permissões de Acesso: Apenas gestor.

  Visualizar Funcionário
  Rota: GET /api/manager/employee/{id}
  Descrição: Visualiza os detalhes de um funcionário específico sob a gestão do gestor logado.
  Permissões de Acesso: Apenas gestor.

  Atualizar Funcionário
  Rota: PUT /api/manager/employee/{id}
  Descrição: Atualiza os dados de um funcionário sob a gestão do gestor logado.
  Permissões de Acesso: Apenas gestor.

  Deletar Funcionário
  Rota: DELETE /api/manager/employee/{id}
  Descrição: Remove um funcionário sob a gestão do gestor logado.
  Permissões de Acesso: Apenas gestor.

  - Responsabilidades do funcionário
    Editar próprios dados
    Rota: PUT /api/employee/profile
    Descrição: Permite que o funcionário edite seus próprios dados.
    Permissões de Acesso: Apenas funcionário.

  - Os endpoints para visualização dos indicadores de diversidade serão:
    GET /api/groups/gender;
    GET /api/groups/color;
    GET /api/groups/sexual-orientation;
    GET /api/groups/handicapped-person;
    GET /api/groups/foreign;
    GET /api/groups/seniors;

## Setup

- Clone o repositório;
- Instale as dependências (`npm install`);
<!-- - Setup PostgreSQL and Redis (`docker compose up -d`);
- Copy `.env.example` file (`cp .env.example .env`); -->
- Rode a aplicação (`npm run start`);
<!-- - Test it! (I personally recommend testing with [Hoppscotch](https://hoppscotch.io/)). -->

<!-- - Mapear o cenário atual de diversidade e inclusão nos quadros da Corps Solutions;
  - Por quê?
  - Onde?
  - Quando?
  - Por quem?
  - Como?
- Indicadores de diversidade da empresa, com endpoints para grupos específicos.
  - Selecionamos alguns grupos como:
    - Negros / Pardos
    - Mulheres
    - LGBTQIA+
  - GET `/groups` Lista contendo todos os grupos catalogados;
  - GET `/groups/group` Grupo que se deseja obter informações
  - GET `/demands` JSON contendo chave e valor onde a chave é o grupo e o valor é o quantitativo de vagas esperadas
  - GET `/demands/group` Quantitativo de vagas esperadas para o grupo selecionado na URL
  - POST `/employess/` Payload com JSON de cadastro do funcionário por exemplo:

    ```bash
      {
        "nome": "Lampião",
        "grupo": "Pardo"
      }
    ```

- Como alcançar esses grupos específicos e contratá-los?
  - Por quê?
  - Onde?
  - Quando?
  - Por quem?
  - Como?
- Mecanismos para apresentar vagas para grupos específicos.
  - Como reter e apoiar os colaboradores antigos e novos na Corps Solutions?
  - Por quê?
  - Onde?
  - Quando?
  - Por quem?
  - Como?
- Monitoramento e análise dos colaboradores, associado a um serviço de apoio psicológico.
  - ... -->
