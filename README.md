# Problemáticas da Corp Solutions

- Falta de dados atuais sobre diversidade e minorias nos quadros da Corps Solutions.

## Metodologia

- Mapear o cenário atual de diversidade e inclusão nos quadros da Corps Solutions;
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
  - ...
