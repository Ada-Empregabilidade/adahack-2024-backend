const candidatoRepository = require("../repositories/CandidatoRepository");

class RelatorioPcdService {
    async execute(consulta){
        const TIPOS_CONSULTA = ["todos", "funcionarios", "candidatos", "desligados"];
        if (!TIPOS_CONSULTA.includes(consulta)) {
            consulta = "todos";
        }
        const candidatos = await candidatoRepository.relatorio_pcd(consulta);
        return candidatos;
    }
}

const relatorioPcdService = new RelatorioPcdService();

module.exports = relatorioPcdService;