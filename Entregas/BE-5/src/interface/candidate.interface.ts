export interface ICandidateCreate {
  nome: string;
  data_nascimento: string;
  telefone: string;
  email: string;
  estado: string;
  cidade: string;
  bairro: string;
  graduacao: string;
  infos_tecnicas: string[];
  senioridade: string;
  funcionario_interno: boolean;
  pcd: boolean;
  etnia: string;
  genero: string;
}

export interface ICandidateFilter {
  nome?: string;
  data_nascimento?: string;
  telefone?: string;
  email?: string;
  estado?: string;
  cidade?: string;
  bairro?: string;
  graduacao?: string;
  infos_tecnicas: string[];
  senioridade?: string;
  funcionario_interno?: boolean;
  pcd?: boolean;
  etnia?: string;
  genero?: string;
}