const AppError = require("../errors/AppError");
const candidatoRepository = require("../repositories/CandidatoRepository");
const idade_maxima = require("../utils/idade_maxima");
const idade_minima = require("../utils/idade_minima");
const validaDigitosCPF = require("../utils/valida_cpf");
var validator = require("email-validator");
const valida_data = require("../utils/valida_data");
const criptografar = require("../helpers/CryptHelper")

class CadastrarCandidatoService {
    async execute(nome, cpf, email, senha, data_nascimento, etnia, identidade_genero, orientacao_sexual, pcd){
        const ETNIAS = ["amarela", "branca", "preta", "parda", "indígena", "prefiro não informar"];
        const IDENTIDADES_GENERO = ["mulher cis", "homem cis", "mulher trans", "homem trans", "não-binário", "neutro", "agênero"];
        const ORIENTACOES_SEXUAIS = ["heterossexual", "homossexual", "bissexual", "assexual", "pansexual", "outro"];
        if(!nome || !cpf || !email || !senha || !data_nascimento || !etnia || !identidade_genero || !orientacao_sexual || pcd === null || pcd === undefined){
            throw new AppError("ERRO! Nenhum campo pode ficar vazio")
        }
        if(!validaDigitosCPF(cpf)){
            throw new AppError("ERRO! CPF deve ter exatamente 11 digitos numéricos");
        }
        if(!validator.validate(email)){
            throw new AppError("ERRO! Email informado em formato inválido");
        }
        if(!valida_data(data_nascimento)){
            throw new AppError("ERRO! Data de nascimento em formato inválido. Deve ser AAAA-MM-DD");
        }
        if(!idade_minima(new Date(data_nascimento))){
            throw new AppError(`ERRO! Candidato não tem a idade mínima para se cadastrar. Precisa ter pelo menos ${process.env.IDADE_MINIMA} anos`)
        }
        if(!idade_maxima(new Date(data_nascimento))){
            throw new AppError(`ERRO! Verifique a idade informada. Precisa ser menor que ${process.env.IDADE_LIMITE} anos`)
        }
        const cpf_existe = await candidatoRepository.buscar_por_cpf(cpf);
        if(cpf_existe){
            throw new AppError(`ERRO! Já existe um candidato cadastrado com este CPF`, 409);
        }
        const email_existe = await candidatoRepository.buscar_por_email(email);
        if(email_existe){
            throw new AppError(`ERRO! Já existe um candidato cadastrado com este email`, 409);
        }
        email = email.toLowerCase();
        etnia = etnia.toLowerCase();
        if(!ETNIAS.includes(etnia)){
            throw new AppError(`ERRO! Etnia informada inválida (são válidas apenas [${ETNIAS.join(", ")}])`);
        }
        identidade_genero = identidade_genero.toLowerCase();
        if(!IDENTIDADES_GENERO.includes(identidade_genero)){
            throw new AppError(`ERRO! Identidade de gênero informada inválida (são válidas apenas ${IDENTIDADES_GENERO.join(", ")})`);
        }
        orientacao_sexual = orientacao_sexual.toLowerCase();
        if(!ORIENTACOES_SEXUAIS.includes(orientacao_sexual)){
            throw new AppError(`ERRO! Orientação sexual informada inválida (são válidas apenas ${ORIENTACOES_SEXUAIS.join(", ")})`);
        }
        const senhaCriptografada = criptografar(senha)
        const candidato = {nome: nome, cpf: cpf, email: email, senha: senhaCriptografada, data_nascimento: data_nascimento, etnia: etnia, identidade_genero: identidade_genero, orientacao_sexual: orientacao_sexual, pcd: pcd};
        const candidatoCadastrado = await candidatoRepository.cadastrar(candidato);
        return candidatoCadastrado;
    }
}

const cadastrarCandidatoService = new CadastrarCandidatoService();

module.exports = cadastrarCandidatoService;