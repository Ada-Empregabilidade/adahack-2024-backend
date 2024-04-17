const AppError = require("../errors/AppError");
const candidatoRepository = require("../repositories/CandidatoRepository");

class DesligarCandidatoService {
    async execute(id_candidato, data_demissao, usuario){
        if(!id_candidato || !data_demissao || !usuario){
            throw new AppError("ERRO! Nenhum campo pode ficar vazio");
        }
        const candidato = await candidatoRepository.buscar_por_id(id_candidato);
        if(!candidato){
            throw new AppError("ERRO! Funcionário não encontrado", 404);
        }
        if(candidato.data_contratacao === null){
            throw new AppError("ERRO! Este funcionário não pode ser desligado, pois ainda não foi contratado");
        }
        if(usuario.email === process.env.SUPERUSER && usuario.senha === process.env.PASSWORD_SUPERUSER){
            usuario.id = "ROOT";
        }
        if(parseInt(usuario.nivel_acesso) <= parseInt(candidato.nivel_acesso)){
            throw new AppError(`ERRO! O funcionário ${candidato.nome} possui nível de acesso igual ou maior que o seu, não é possível fazer o desligamento dele. Para isso solicite a alguém com o nível maior que o seu, ou ao ROOT`)
        }
        const candidatoDesligado = await candidatoRepository.desligar(candidato, data_demissao, usuario);
        return candidatoDesligado;
    }
}

const desligarCandidatoService = new DesligarCandidatoService();

module.exports = desligarCandidatoService;