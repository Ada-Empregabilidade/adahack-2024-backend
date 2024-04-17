const candidatoRepository = require("../repositories/CandidatoRepository");
const AppError = require("../errors/AppError");
const deficienciaCandidatoRepository = require("../repositories/DeficienciaCandidatoRepository");

class CadastrarDeficienciaCandidatoService {
    async execute(tipo_deficiencia, descricao, cid, usuario){
        const TIPOS_DEFICIENCIA = ["visual", "auditiva", "mental", "intelectual", "espectro autista", "física"];
        if(!tipo_deficiencia){
            throw new AppError("ERRO! Necessário informar o id do candidato e o tipo de deficiência");
        }
        const candidato = await candidatoRepository.buscar_por_id(usuario.id);
        if(!candidato){
            throw new AppError("ERRO! Candidato não encontrado", 404);
        }
        if(!candidato.pcd){
            await candidatoRepository.setar_pcd(candidato);
        }
        tipo_deficiencia = tipo_deficiencia.toLowerCase();
        if(!TIPOS_DEFICIENCIA.includes(tipo_deficiencia)){
            throw new AppError(`ERRO! Tipo de deficiência informado inválido (são válidos apenas ${TIPOS_DEFICIENCIA.join(", ")})`)
        }
        if(candidato.id !== usuario.id){
            throw new AppError("ERRO! Id do candidato diferente do id do usuário logado")
        }
        const deficienciaCandidato = {id_candidato: usuario.id, tipo_deficiencia: tipo_deficiencia, descricao: descricao, cid: cid};
        const novaDeficienciaCandidato = await deficienciaCandidatoRepository.cadastrar(deficienciaCandidato);
        return novaDeficienciaCandidato;
    }
}

const cadastrarDeficienciaCandidatoService = new CadastrarDeficienciaCandidatoService();

module.exports = cadastrarDeficienciaCandidatoService;