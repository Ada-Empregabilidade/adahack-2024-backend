const candidatoRepository = require("../repositories/CandidatoRepository");

class RelatorioPcdVsNaoPcdService {
    async execute(consulta){
        const TIPOS_CONSULTA = ["todos", "funcionarios", "candidatos", "desligados"];
        if (!TIPOS_CONSULTA.includes(consulta)) {
            consulta = "todos";
        }
        const candidatos = await candidatoRepository.relatorio_pcd_vs_nao_pcd(consulta);
        return candidatos;
    }
}

const relatorioPcdVsNaoPcdService = new RelatorioPcdVsNaoPcdService();

module.exports = relatorioPcdVsNaoPcdService;