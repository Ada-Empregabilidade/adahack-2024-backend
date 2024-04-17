const candidatoRepository = require("../repositories/CandidatoRepository");

class RelacaoPcdService {
    async execute(consulta){
        const TIPOS_CONSULTA = ["todos", "funcionarios", "candidatos", "desligados"];
        if (!TIPOS_CONSULTA.includes(consulta)) {
            consulta = "todos";
        }
        const candidatos = await candidatoRepository.percentual_pcd(consulta);
        return candidatos;
    }
}

const relacaoPcdService = new RelacaoPcdService();

module.exports = relacaoPcdService;