const candidatoRepository = require("../repositories/CandidatoRepository");
const deficienciaCandidatoRepository = require("../repositories/DeficienciaCandidatoRepository");

class ListarDeficienciasPorCandidatoService {
    async execute(id_candidato){
        const candidato = await candidatoRepository.buscar_por_id(id_candidato);
        if(!candidato){
            throw new Error("ERRO! Candidato não encontrado", 404);
        }
        if(!candidato.pcd){
            throw new Error("ERRO! Candidato não cadastrado como PcD");
        }
        const deficienciasCandidato = await deficienciaCandidatoRepository.buscar_por_candidato(id_candidato);
        const output = {candidato: candidato.nome, deficiencias: deficienciasCandidato}
        return output;
    }
}

const listarDeficienciasPorCandidatoService = new ListarDeficienciasPorCandidatoService();
module.exports = listarDeficienciasPorCandidatoService;