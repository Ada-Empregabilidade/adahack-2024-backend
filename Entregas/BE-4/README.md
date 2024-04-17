![](https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/header-logo.svg)

# Sistema de Diversidade para o Setor de RH da Corps Solutions

## Descrição do Problema

A empresa Corps Solutions está comprometida em aumentar a diversidade em seu quadro de colaboradores, reconhecendo que a diversidade é fundamental para a inovação e o sucesso organizacional. No entanto, atualmente enfrentamos desafios na identificação e promoção da diversidade em nossa empresa. Tanto os colaboradores existentes quanto os futuros candidatos devem refletir uma ampla gama de origens, perspectivas e experiências.

O principal desafio enfrentado pelo setor de RH é a falta de ferramentas e sistemas para avaliar e monitorar efetivamente a diversidade em nossa empresa. Atualmente, não temos uma maneira sistemática de acompanhar métricas de diversidade, como representação de gênero, etnia, idade, habilidades e outras características importantes.

Como resultado, nossa capacidade de identificar lacunas na diversidade, implementar iniciativas de inclusão e avaliar seu impacto é limitada. Isso pode levar a uma cultura organizacional estagnada e a oportunidades perdidas para atrair e reter talentos diversos.

**Conteúdo**

- [Objetivo do Projeto](#objetivo-do-projeto)
- [Sobre a Aplicação](#sobre-a-aplicação)
- [Requisitos](#requisitos)
    - [Funcionais](#funcionais)
    - [Não Funcionais](#não-funcionais)
- [Funcionalidades](#funcionalidades)
    - [1.Cadastro e Login de Usuários](#1-cadastro-e-login-de-usuários)
        - [Fluxo de Cadastro](#fluxo-de-cadastro)
        - [Fluxo de Login](#fluxo-de-login)
        - [Divisão de Perfis de Usuários](#divisão-de-perfis-de-usuários)
    - [2.Análise de dados demográficos dos funcionários e candidatos](#2-análise-de-dados-demográficos-dos-funcionários-e-candidatos)
        - [Processo de Análise](#processo-de-análise)
        - [Apresentação de Resultados:](#apresentação-de-resultados)
    - [3.Cadastro e Listagem de vagas](#3-cadastro-e-listagem-de-vagas)
        - [Fluxo do Cadastro de Vagas](#fluxo-do-cadastro-de-vagas)
        - [Fluxo de Listagem das vagas](#fluxo-de-listagem-das-vagas)
- [Instalar e Rodar o Projeto](#instalar-e-rodar-o-projeto)
- [Nossa Squad](#nossa-squad)

## Objetivo do Projeto

O objetivo deste projeto é desenvolver uma solução de software para o setor de RH da Corp Solutions que possibilite:

- Coletar e armazenar dados sobre a diversidade de nosso quadro de colaboradores.
- Analisar esses dados para identificar áreas de melhoria e oportunidades de inclusão.
- Visualizar métricas de diversidade de maneira clara e acessível para a equipe de RH e a liderança da empresa.
- Facilitar a tomada de decisões informadas sobre políticas e práticas de diversidade e inclusão.

Esperamos que essa solução nos ajude a criar um ambiente de trabalho mais inclusivo, equitativo e acolhedor para todos os nossos colaboradores, promovendo uma cultura de diversidade e respeito mútuo.

## Ferramentas Utilizadas

Abaixo está a lista de todas as principais ferramentas e frameworks/libraries usadas na construção do projeto:

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![ExpressJs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

![Jest](https://jestjs.io/img/jest-badge.svg)

🐶`Husky`

## Requisitos

### Funcionais:

1. Cadastro de Usuários:
- RF1: Permitir que o usuário acesse a rota de cadastro.
- RF2: Oferecer um formulário de cadastro para o usuário preencher com suas informações pessoais.
- RF3: Permitir que o usuário selecione o tipo de usuário (funcionário, RH, candidato).
- RF4: Validar os dados fornecidos pelo usuário durante o processo de cadastro.
- RF5: Confirmar o cadastro e redirecionar o usuário para a rota de login após a validação bem-sucedida.

2. Login de Usuários:
- RF6: Permitir que o usuário acesse a rota de login.
- RF7: Fornecer campos de login para o usuário preencher (e-mail/username, senha).
- RF8: Validar as credenciais fornecidas pelo usuário durante o processo de login.
- RF9: Redirecionar o usuário para a área correta do sistema com base no perfil do usuário (funcionário, RH, candidato) após a validação bem-sucedida.

3. Divisão de Perfis de Usuários:
- RF10: Para os administradores (RH), fornecer acesso total ao sistema, incluindo gerenciamento de funcionários, recrutamento, listagem de funcionários, listagem de candidatos, análise de dados demográficos dos funcionários e análise de dados demográficos dos candidatos.
- RF11: Para os funcionários, permitir acesso apenas às informações pessoais.
- RF12: Para os candidatos, permitir acesso ao formulário de candidatura de emprego e acompanhamento do status de candidatura.

4. Cadastro de Vagas:
- RF13: Permitir que o time de RH cadastre vagas fornecendo as informações pertinentes sobre a nova vaga de emprego, incluindo título da vaga, descrição da vaga, requisitos necessários, localização da vaga, tipo de contrato e data de encerramento da candidatura.
- RF14: Validar os dados fornecidos pelo RH para garantir que estão completos e corretos.
- RF15: Permitir o cadastro da vaga no sistema após a validação bem-sucedida.
- RF16: Exibir uma mensagem de confirmação após o cadastro da vaga.

5. Listagem de Vagas:
- RF17: Permitir que os candidatos acessem a página de listagem de vagas.
- RF18: Exibir uma lista das vagas de emprego atualmente disponíveis.
- RF19: Oferecer opções de filtros para que os candidatos possam refinar a lista de vagas exibidas, como por título, localização, tipo de contrato, etc.
- RF20: Permitir que o usuário clique em uma vaga para visualizar mais detalhes, como descrição completa, requisitos, data de encerramento da candidatura, etc.

6. Coleta de Dados Demográficos:
- RF21: Os dados demográficos dos funcionários e candidatos devem ser coletados durante o processo de cadastro.
- RF22: Garantir que os dados demográficos sejam armazenados em uma estrutura adequada no banco de dados.

7. Processamento de Dados:
- RF23: O sistema deve processar os dados demográficos para calcular a representação percentual de cada classe demográfica, como gênero, etnia e idade.
- RF24: Os cálculos de representação percentual devem ser precisos e atualizados regularmente.

8. Apresentação de Resultados:
- RF25: Disponibilizar dados dos resultados da análise ao RH.
- RF26: Os resultados devem mostrar a distribuição percentual de diferentes classes demográficas no quadro de colaboradores e candidatos.
- RF27: Permitir que o time de RH filtre e visualize os dados demográficos por diferentes categorias, como funcionário, candidato, etc.

### Não Funcionais:

1. Desempenho:
- RNF1: O sistema deve ter um tempo de resposta rápido, especialmente durante operações críticas como cadastro e pesquisa de candidatos. 
- RNF2: Deve ser escalável para lidar com um grande volume de cadastros e consultas.

2. Manutenibilidade:
- RNF3: O sistema deve ser desenvolvido utilizando conceitos de Programação Orientada a Objetos (POO), com injeção de dependências para facilitar a manutenção do código. 
- RNF4: Deve ter validações para evitar o recebimento de informações nulas, garantindo a integridade dos dados no banco de dados SQL.

3. Documentação técnica detalhada:
- RNF5: Deve haver uma documentação técnica que descreva a arquitetura, tecnologias, modelos de dados e outras decisões de design da API.

4. Segurança:
- RNF6: Garantir a segurança dos dados dos usuários, incluindo medidas para proteger informações sensíveis e garantir conformidade com regulamentações de privacidade de dados, controle de acesso, autenticação e autorização.

5. Escalabilidade:
- RNF7: O sistema deve ser projetado para escalar facilmente, permitindo a adição de novos usuários e funcionalidades sem comprometer o desempenho.

6. Seguir modelo [Git Flow](https://www.alura.com.br/artigos/git-flow-o-que-e-como-quando-utilizar) e [Conventional Commits](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657):
- RNF8: Separação de branches, com `feature/nome-da-branch` para o desenvolvimento de novas funcionalidades e, uma vez que uma etapa de desenvolvimento esteja concluída e as alterações estejam mescladas na branch `develop`, deve ser criada uma branch `release/nome-da-branch` para mergear na main branch.
- RNF9: Usar commits padronizados para ajudar a manter um histórico de commit limpo, organizado e fácil de entender.

## Funcionalidades

### 1. Cadastro e Login de Usuários:

Esta funcionalidade permite que usuários se cadastrem e façam login no sistema. O sistema suporta três tipos de usuários: funcionários, RH (administradores) e candidatos.
    
### Fluxo de Cadastro:

1. O usuário acessa a página de cadastro.
2. O usuário preenche o formulário de cadastro com suas informações pessoais.
3. O usuário seleciona o tipo de usuário (funcionário, RH, candidato).
4. O sistema valida os dados fornecidos.
5. O sistema confirma o cadastro e redireciona o usuário para a página de login. 

### Fluxo de Login:

1. O usuário acessa a página de login.
2. O usuário preenche os campos de login (e-mail/username, senha).
3. O sistema valida as credenciais fornecidas.
4. O sistema redireciona o usuário para a área correta do sistema com base no perfil do usuário (funcionário, RH, candidato).

### Divisão de Perfis de Usuários:

- RH (Administradores): Acesso total ao sistema, incluindo gerenciamento de funcionários, recrutamento, listagem de funcionário, listagem de candidatos, análise de dados demográficos dos funcionários e análise de dados demográficos dos candidatos.
- Funcionários: Acesso a informações pessoais.
- Candidatos: Acesso ao formulário de candidatura de emprego e acompanhamento do status de candidatura.

### 2. Análise de dados demográficos dos funcionários e candidatos:

Esta funcionalidade permite ao RH analisar os dados demográficos dos funcionários e candidatos à vagas, fornecendo insights valiosos sobre a composição demográfica do quadro de colaboradores e candidatos.

### Processo de Análise:

1. Os dados demográficos dos funcionários e candidatos são coletados durante o processo de cadastro.
2. Os dados são armazenados em uma estrutura adequada no banco de dados.
3. O sistema processa os dados para calcular a representação percentual de cada classe demográfica (por exemplo: gênero, etnia, idade).

### Apresentação de Resultados:

1. Os resultados da análise são apresentados ao RH por meio de gráficos.
2. Os gráficos mostram a distribuição percentual de diferentes classes demográficas no quadro de colaboradores e candidatos.
3. O tim de RH pode filtrar e visualizar os dados demográficos por diferentes categorias, como funcionário, candidato, (...).


### 3. Cadastro e Listagem de vagas:

Esta funcionalidade permite ao departamento de RH cadastrar novas vagas de emprego disponíveis na empresa e listar as vagas existentes para que os candidatos possam visualizá-las e se candidatar.

### Fluxo do Cadastro de Vagas:

1. O funcionário do RH fornece as informações pertinentes ao cadastrar uma nova vaga, como: título da vaga, descrição da vaga, requisitos necessários, localização da vaga, tipo de contrato e data de encerramento da candidatura.
2. O sistema deve validar os dados fornecidos pelo RH e permitir o cadastro da vaga.
3. O sistema cadastra a nova vaga e exibe uma mensagem de confirmação.

### Fluxo de Listagem das vagas:
1. O candidato acessa a página de listagem de vagas.
2. O sistema deve exibir uma lista das vagas de emprego atualmente disponíveis.
3. O candidato pode aplicar filtros para refinar a lista de vagas exibidas.
4. O usuário pode clicar em uma vaga para ver mais detalhes.

## Instalar e Rodar o Projeto

Rodar a nossa aplicação em sua máquina local é uma tarefa simples.

### Clone o repositório:

```bash
git clone https://github.com/adailtonasp/adahack-2024-backend.git
```

### Dependências Globais

Você precisa ter as seguintes dependências instaladas:

- `Node.js LTS v18` (ou qualquer versão superior)

### Dependências Locais

Com o repositório clonado e as dependências globais instaladas, navegue até o diretório do projeto:

```bash
cd adahack-2024-backend/Entregas/BE-4
```

E instale as dependências locais do projeto:

```bash
npm install
```

### Rodar o Projeto

Para rodar o projeto localmente, basta executar o comando abaixo:

```bash
npm run dev
```

Isto irá automaticamente rodar serviços como Banco de dados e Servidor Web e irá o expor no seguinte endereço:

```bash
http://localhost:3000/
```

Observações:
- Para derrubar todos os serviços, basta utilizar as teclas `CTRL+C`, que é o padrão dos terminais para matar processos.
- Você pode conferir todas as variáveis de ambiente utilizadas na aplicação dentro do arquivo `.env.example` encontrado na raiz do projeto. Para utilizar, você deve renomear o arquivo para `.env`.

## Nossa Squad

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/42976966?v=4" alt="Imagem do Membro 1" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/Sownatta">Wilson Rocha</a><br>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/121477907?v=4" alt="Imagem do Membro 2" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/FlightofIcarus">Ícaro Santos</a><br>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/147253362?v=4" alt="Imagem do Membro 3" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/PatrickPSouza">Patrick Souza</a><br>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/134095546?v=4" alt="Imagem do Membro 3" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/MariliaPinheiroAlves">Marília Pinheiro Alves</a><br>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/80291199?v=4" alt="Imagem do Membro 3" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/SilvioLucasDev">Silvio Lucas</a><br>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/26415404?v=4" alt="Imagem do Membro 3" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/adailtonasp">Adailton Silva Palhano</a><br>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/99753415?v=4" alt="Imagem do Membro 3" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/DevAugustomelo">Augusto Melo</a><br>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/110869779?v=4" alt="Imagem do Membro 3" style="width: 100px; height: 100px; border-radius: 50%;"/><br>
      <a href="https://github.com/muriloma">Murilo Andrade</a><br>
    </td>
  </tr>
</table>


