import * as yup from 'yup';

export const CandidateSchema = yup.object({
  nome: yup.string().required('Nome field is required'),
  data_nascimento: yup.string().required('Data de Nascimento field is required'),
  telefone: yup.string().required('Telefone field is required'),
  email: yup.string().email().required('Email field is required'),
  estado: yup.string().required('Estado field is required'),
  cidade: yup.string().required('Cidade field is required'),
  bairro: yup.string().required('Bairro field is required'),
  graduacao: yup.string().required('Graduacao field is required'),
  infos_tecnicas: yup.array().of(yup.string()).required('Infos Tecnicas field is required'),
  senioridade: yup.string().required('Senioridade field is required'),
  funcionario_interno: yup.boolean().required('Funcionario Interno field is required'),
  pcd: yup.boolean().required('PCD field is required'),
  etnia: yup.string().required('Etnia field is required'),
  genero: yup.string().required('Genero field is required'),
});