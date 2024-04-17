const DeficienciaCandidatoModel = require("../../infra/db/models/DeficienciaCandidato")
const uuid = require("uuid")
class DeficienciaCandidatoRepository {
    async cadastrar(deficienciaCandidato){
        const id = uuid.v4();
        const deficienciaCadastrada = await DeficienciaCandidatoModel.create({id, ...deficienciaCandidato})
        return deficienciaCadastrada;
    }

    async buscar_por_candidato(id_candidato){
        const deficienciasCandidato = await DeficienciaCandidatoModel.findAll({
            where: {
                id_candidato: id_candidato
            }
        });
        return deficienciasCandidato;
    }
}

const deficienciaCandidatoRepository = new DeficienciaCandidatoRepository();
module.exports = deficienciaCandidatoRepository;