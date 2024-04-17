const candidatoRepository = require("../repositories/CandidatoRepository");

class FiltrarCandidatosService {
    async execute(consulta){
        const TIPOS_CONSULTA = ["todos", "funcionarios", "candidatos", "desligados"];
        if (!TIPOS_CONSULTA.includes(consulta)) {
            consulta = "todos";
        }
        const candidatos = await candidatoRepository.listar_donuts(consulta);
        return candidatos;
    }
}

const filtrarCandidatosService = new FiltrarCandidatosService();

module.exports = filtrarCandidatosService;