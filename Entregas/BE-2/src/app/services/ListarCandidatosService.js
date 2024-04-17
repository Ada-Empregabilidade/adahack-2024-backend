const candidatoRepository = require("../repositories/CandidatoRepository");

class ListarCandidatosService {
    async execute(pagina, funcionario){
        if(!["true", "false"].includes(String(funcionario))){
            funcionario = null;
        } else {
            funcionario = (funcionario === "true");
        }
        if(!pagina || pagina < 1 || isNaN(pagina)){
            pagina = 1;
        }
        const candidatos = await candidatoRepository.listar(pagina, funcionario);
        return candidatos;
    }
}

const listarCandidatosService = new ListarCandidatosService();

module.exports = listarCandidatosService;