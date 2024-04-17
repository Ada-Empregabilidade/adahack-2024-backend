const candidatoRepository = require("../repositories/CandidatoRepository");

class FiltrarFuncionariosService {
    async execute(campos){
        const FILTROS = ["etnia", "identidade_genero", "orientacao_sexual"];
        for(let i = 0; i < campos.length; i++){
            let [chave, valor] = campos[i].split("=");
            chave = chave.replace("'", "");
            valor = valor.replace("'", "");
            if(!FILTROS.includes(chave)){
                return [];
            }
        }
        const candidatos = await candidatoRepository.listar_funcionarios_por_filtros(campos);
        return candidatos;
    }
}

const filtrarFuncionariosService = new FiltrarFuncionariosService();

module.exports = filtrarFuncionariosService;