const AppError = require("../errors/AppError");
const criptografar = require("../helpers/CryptHelper");
const candidatoRepository = require("../repositories/CandidatoRepository");
const jwt = require("jsonwebtoken");

class LoginService {
    async execute(email, senha){
        let accessToken;
        if(email === process.env.SUPERUSER && senha === process.env.PASSWORD_SUPERUSER){
            accessToken = this.logar({email: email, senha: senha});
            return {mensagem: "Usuário ROOT logado com sucesso. Nível de acesso máximo ao sistema", accessToken};
        }
        else {
            const candidato = await candidatoRepository.buscar_por_email(email);
            if(!candidato){
                throw new AppError("ERRO! Email ou senha incorretos");
            }
            const senhaInformada = criptografar(senha);
            if(senhaInformada !== candidato.senha){
                throw new AppError("ERRO! Senha informada incorreta");
            }
            accessToken = this.logar(candidato);
            return {mensagem: `Usuário ${candidato.nome} logado com sucesso. Nível de acesso ao sistema: ${candidato.nivel_acesso}`, accessToken};
        }
        
    }

    logar(dados){
        return jwt.sign(dados, process.env.JWT_SECRET, {expiresIn: "1d"});
    }
}

const loginService = new LoginService();

module.exports = loginService;