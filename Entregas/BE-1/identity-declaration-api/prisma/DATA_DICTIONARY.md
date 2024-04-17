# Dicionário de Dados do Projeto

## Modelos

### AgeGroup
- `id` (Int): Identificador único da faixa etária, autoincremental.
- `code` (String): Código único para identificação da faixa etária.
- `description` (String): Descrição textual da faixa etária.
- `responses` (DiversityResponse[]): Relação com as respostas de diversidade associadas a esta faixa etária.

### Gender
- `id` (Int): Identificador único do gênero, autoincremental.
- `code` (String): Código único para identificação do gênero.
- `value` (String): Descrição textual do gênero.
- `responses` (DiversityResponse[]): Relação com as respostas de diversidade associadas a este gênero.

### Ethnicity
- `id` (Int): Identificador único da etnia, autoincremental.
- `code` (String): Código único para identificação da etnia.
- `value` (String): Descrição textual da etnia.
- `responses` (DiversityResponse[]): Relação com as respostas de diversidade associadas a esta etnia.

### Disability
- `id` (Int): Identificador único da deficiência, autoincremental.
- `code` (String): Código único para identificação da deficiência.
- `value` (String): Descrição textual da deficiência.
- `responses` (DiversityResponse[]): Relação com as respostas de diversidade associadas a esta deficiência.

### DiversityResponse
- `id` (Int): Identificador único da resposta, autoincremental.
- `ageGroupId` (Int): Chave estrangeira para AgeGroup.
- `ageGroup` (AgeGroup): Relação com AgeGroup.
- `genderId` (Int): Chave estrangeira para Gender.
- `gender` (Gender): Relação com Gender.
- `ethnicityId` (Int): Chave estrangeira para Ethnicity.
- `ethnicity` (Ethnicity): Relação com Ethnicity.
- `lgbtqia` (Boolean): Indica se a pessoa se identifica como LGBTQIAPN+.
- `parent` (Boolean): Indica se a pessoa é pai ou mãe.
- `disabilityId` (Int): Chave estrangeira para Disability.
- `disability` (Disability): Relação com Disability.
- `createdAt` (DateTime): Data e hora de criação da resposta.
- `isInternalResponse` (Boolean): Indica se a resposta é interna.

## Mapeamento das Respostas do Formulário

### Faixa Etária
- Menos de 18 anos => `code: under-18`
- 18-24 anos => `code: 18-24`
- 25-34 anos => `code: 25-34`
- 35-44 anos => `code: 35-44`
- 45-54 anos => `code: 45-54`
- 55-64 anos => `code: 55-64`
- 65 anos ou mais => `code: 65-plus`

### Identidade de Gênero
- Homem cisgênero => `code: cis-male`
- Mulher cisgênero => `code: cis-female`
- Homem transgênero => `code: trans-male`
- Mulher transgênero => `code: trans-female`
- Não-binário => `code: non-binary`
- Prefiro não dizer => `code: prefer-not-to-say`
- Outro => `code: other`

### Identidade Étnica/Racial
- Branco - Caucasiano => `code: white`
- Negro - Africano/Afro-americano => `code: black`
- Hispânico ou Latino => `code: hispanic-latino`
- Asiático => `code: asian`
- Indígena => `code: indigenous`
- Prefiro não dizer => `code: prefer-not-to-say`
- Outro => `code: other`

### LGBTQIAPN+
- Sim => `lgbtqia: true`
- Não => `lgbtqia: false`
- Prefiro não dizer => `lgbtqia: null` (represente como um valor opcional ou omitido)

### Pai ou Mãe
- Sim => `parent: true`
- Não => `parent: false`
- Prefiro não dizer => `parent: null` (represente como um valor opcional ou omitido)

### Deficiência
- Deficiência visual => `code: visual-impairment`
- Deficiência auditiva => `code: hearing-impairment`
- Deficiência motora => `code: motor-disability`
- Deficiência intelectual => `code: intellectual-disability`
- Deficiência psicossocial => `code: psychosocial-disability`
- Não possuo deficiência => `code: no-disability`
- Prefiro não dizer => `code: prefer-not-to-say`
- Outra => `code: other`