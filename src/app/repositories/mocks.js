const usuariosMock = [
    {
      id: '1',
      primeiro_nome: 'João',
      sobrenome: 'Silva',
      cargo: 'Gerente de Vendas',
      email: 'joao.silva@example.com',
      senha_hash: 'senhaCriptografada123',
      senha_salt: 'saltAleatorio',
      nacionalidade: 'Brasileiro',
      mais_de_60: false,
      nivel_educacional: 'Pós-Graduação',
      genero: true, 
      etnia: true, 
      orientacao_sexual: true,
      pcd: false, 
      tipo_usuario: 'Funcionário'
    },
    {
      id: '2',
      primeiro_nome: 'Maria',
      sobrenome: 'Oliveira',
      cargo: 'Desenvolvedora Web',
      email: 'maria.oliveira@example.com',
      senha_hash: 'senhaCriptografada456',
      senha_salt: 'saltAleatorio',
      nacionalidade: 'Brasileira',
      mais_de_60: false,
      nivel_educacional: 'Graduação',
      genero: false, 
      etnia: false,
      orientacao_sexual: true, 
      pcd: false,
      tipo_usuario: 'Funcionária'
    },
  ];
  
export default usuariosMock;