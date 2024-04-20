const candidatoRepository = require("../repositories/CandidatoRepository");

class ListarCandidatosPcdService {
    async execute(funcionario, pagina){
        if(!pagina || pagina < 1 || isNaN(pagina)){
            pagina = 1;
        }
        if(funcionario !== "true" && funcionario !== "false"){
            funcionario = null;
        } else {
            funcionario = (funcionario === "true");
        }
        const candidatos = await candidatoRepository.listar_candidatos_pcd(pagina, funcionario);
        return candidatos;
    }
}

const listarCandidatosPcdService = new ListarCandidatosPcdService();

module.exports = listarCandidatosPcdService;