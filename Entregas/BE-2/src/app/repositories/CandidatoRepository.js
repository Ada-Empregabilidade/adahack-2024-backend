const { Op } = require("sequelize");
const sequelize = require("../../infra/db");
const CandidatoModel = require("../../infra/db/models/Candidato");
const uuid = require("uuid")

class CandidatoRepository {
    async cadastrar(candidato){
        const novoCandidato = await CandidatoModel.create({id: uuid.v4(), ...candidato});
        return novoCandidato.dataValues;
    }

    async listar(pagina, funcionario){
        let candidatos;
        let totRegistrosTabela;
        let tipoConsulta;
        if(funcionario === null){
        candidatos = await CandidatoModel.findAll({
            limit: 20,
            offset: 20*(pagina-1),
            order: [["nome", "ASC"]]  
        });
        totRegistrosTabela = await CandidatoModel.count()
        tipoConsulta = "Consulta todos os dados do banco (funcionários+candidatos)";
        } else if(funcionario){
            candidatos = await CandidatoModel.findAll({
                limit: 20,
                offset: 20*(pagina-1),
                order: [["nome", "ASC"]],
                where: {
                    [Op.not]: {
                        data_contratacao: null
                    }
                }
            });
        totRegistrosTabela = await CandidatoModel.count({
                where: {
                    [Op.not]: {
                        data_contratacao: null
                    }
                }
            })
        tipoConsulta = "Lista apenas dos funcionários contratados e em atividade";
        } else {
            candidatos = await CandidatoModel.findAll({
                limit: 20,
                offset: 20*(pagina-1),
                order: [["nome", "ASC"]],
                where: {
                    data_contratacao: null
                }
            });
        totRegistrosTabela = await CandidatoModel.count({
                where: {
                    data_contratacao: null
                }
            })
        tipoConsulta = "Lista apenas dos candidatos não contratados ainda";
        }
        const totRegistrosEnviados = candidatos.length
        return {pagina: parseInt(pagina), totRegistrosTabela, totRegistrosEnviados, tipoConsulta, candidatos};
    }

    async listar_filtros(campos=[]){
        const parametros = [];
        const valores = []
        for(let i = 0; i < campos.length; i++){
            let [chave, valor] = campos[i].split("=");
            valor = valor.replace("'", "").replace("'", "");
            parametros.push(`${chave}=?`);
            valores.push(valor);
        }
        let resultados;
        if(campos.length > 0){
            const query = `SELECT * FROM Candidato WHERE ${parametros.join(' AND ')}`
            //console.log(query)
            resultados = await sequelize.query(query, {
                replacements: valores
            });
        } else {
            const query = `SELECT * FROM Candidato`
            //console.log(query)
            resultados = await sequelize.query(query, {
                replacements: valores
            });
        }
        
        return resultados[0];
    }

    async listar_funcionarios_por_filtros(campos=[]){
        const parametros = [];
        const valores = []
        for(let i = 0; i < campos.length; i++){
            let [chave, valor] = campos[i].split("=");
            valor = valor.replace("'", "").replace("'", "");
            parametros.push(`${chave}=?`);
            valores.push(valor);
        }
        let resultados;
        if(campos.length > 0){
            const query = `SELECT * FROM Candidato WHERE ${parametros.join(' AND ')} AND data_contratacao IS NOT NULL`
            //console.log(query)
            resultados = await sequelize.query(query, {
                replacements: valores
            });
        } else {
            const query = `SELECT * FROM Candidato WHERE data_contratacao IS NOT NULL`
            //console.log(query)
            resultados = await sequelize.query(query, {
                replacements: valores
            });
        }
        return resultados[0];
    }


    async listar_donuts(consulta) {
        const fields = ['etnia', 'identidade_genero', 'orientacao_sexual'];
        let promises;
        let tipoConsulta;
        switch (consulta) {
            case "funcionarios":
                promises = fields.map(field => new Promise(function(resolve, reject){
                    sequelize.query(`SELECT ${field}, COUNT(*) AS quantidade, CAST(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() AS DECIMAL(5, 2)) AS percentual FROM Candidato WHERE data_contratacao is NOT NULL GROUP BY ${field} ORDER BY quantidade DESC`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                }))
                tipoConsulta = "Ranking da diversidade dos funcionários (somente funcionários em atividade) por etnia, identidade de gênero e orientação sexual";
                break;
            case "candidatos":
                promises = fields.map(field => new Promise(function(resolve, reject){
                    sequelize.query(`SELECT ${field}, COUNT(*) AS quantidade, CAST(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() AS DECIMAL(5, 2)) AS percentual FROM Candidato WHERE data_contratacao is NULL GROUP BY ${field} ORDER BY quantidade DESC`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                }))
                tipoConsulta = "Ranking da diversidade dos candidatos (somente os candidatos ainda não contratados) por etnia, identidade de gênero e orientação sexual";
                break;
            case "desligados":
                promises = fields.map(field => new Promise(function(resolve, reject){
                    sequelize.query(`SELECT ${field}, COUNT(*) AS quantidade, CAST(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() AS DECIMAL(5, 2)) AS percentual FROM Candidato WHERE data_demissao is NOT NULL GROUP BY ${field} ORDER BY quantidade DESC`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                }))
                tipoConsulta = "Ranking da diversidade dos funcionários desligados (somente os funcionários que já passaram pela empresa e foram desligados) por etnia, identidade de gênero e orientação sexual";
                break;
            default:
                promises = fields.map(field => new Promise(function(resolve, reject){
                    sequelize.query(`SELECT ${field}, COUNT(*) AS quantidade, CAST(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() AS DECIMAL(5, 2)) AS percentual FROM Candidato GROUP BY ${field} ORDER BY quantidade DESC`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                }))
                tipoConsulta = "Ranking da diversidade do banco de dados em geral (incluindo funcionários e candidatos) por etnia, identidade de gênero e orientação sexual";
                break;
        }
        const resultado = await Promise.all(promises);
        let totalRegistros = 0;
        for (let i = 0; i < resultado[0].length; i++) {
            totalRegistros += resultado[0][i].quantidade;
        }
        return {totalRegistros, tipoConsulta, resultado}
    }
    
    async relatorio_pcd(consulta){
        let promises;
        let tipoConsulta;
        switch (consulta) {
            case "funcionarios":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato WHERE pcd=true AND data_contratacao IS NOT NULL) AS total_de_pessoas_deficientes, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato WHERE pcd=true AND data_contratacao IS NOT NULL)*100 AS percentual_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato WHERE pcd=true AND data_contratacao IS NOT NULL GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_deficientes DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Ranking dos tipos de deficiência dos funcionários PcD (somente funcionários em atividade)";
                break;
            case "candidatos":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato WHERE pcd=true AND data_contratacao IS NULL) AS total_de_pessoas_deficientes, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato WHERE pcd=true AND data_contratacao IS NULL)*100 AS percentual_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato WHERE pcd=true AND data_contratacao IS NULL GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_deficientes DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Ranking dos tipos de deficiência dos candidatos PcD (somente os candidatos ainda não contratados)";
                break;
            case "desligados":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato WHERE pcd=true AND data_demissao IS NOT NULL) AS total_de_pessoas_deficientes, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato WHERE pcd=true AND data_demissao IS NOT NULL)*100 AS percentual_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato WHERE pcd=true AND data_demissao IS NOT NULL GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_deficientes DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Ranking dos tipos de deficiência dos funcionários PcD desligados (somente os funcionários que já passaram pela empresa e foram desligados)";
                break;
            default:
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato WHERE pcd=true) AS total_de_pessoas_deficientes, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato WHERE pcd=true)*100 AS percentual_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_deficientes DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Ranking dos tipos de deficiência das pessoas PcD cadastradas no banco de dados (incluindo funcionários e candidatos)";
                break;
        }
        const resultado = await Promise.resolve(promises);
        return {tipoConsulta, resultado}
    }

    async relatorio_pcd_vs_nao_pcd(consulta){
        let promises;
        let tipoConsulta;
        switch (consulta) {
            case "funcionarios":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato WHERE data_contratacao IS NOT NULL) AS total_de_pessoas, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato WHERE data_contratacao IS NOT NULL)*100 AS percentual_deficiencias_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato WHERE data_contratacao IS NOT NULL GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_com_essa_deficiencia DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação entre os tipos de deficiência dos funcionários PcD (somente funcionários em atividade) com os funcionários não PcD em atividade";
                break;
            case "candidatos":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato WHERE data_contratacao IS NULL) AS total_de_pessoas, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato WHERE data_contratacao IS NULL)*100 AS percentual_deficiencias_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato WHERE data_contratacao IS NULL GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_com_essa_deficiencia DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação entre os tipos de deficiência dos candidatos PcD (somente os candidatos ainda não contratados) com os candidatos não PcD";
                break;
            case "desligados":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato WHERE data_demissao IS NOT NULL) AS total_de_pessoas, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato WHERE data_demissao IS NOT NULL)*100 AS percentual_deficiencias_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato WHERE data_demissao IS NOT NULL GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_com_essa_deficiencia DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação entre os tipos de deficiência dos funcionários PcD desligados (somente os funcionários que já passaram pela empresa e foram desligados) com os funcionários não PcD desligados pela empresa";
                break;
            default:
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT tipo_deficiencia, (SELECT COUNT(*) FROM Candidato) AS total_de_pessoas, COUNT(tipo_deficiencia) AS total_de_pessoas_com_essa_deficiencia, (COUNT(tipo_deficiencia))/(SELECT COUNT(*) FROM Candidato)*100 AS percentual_deficiencias_sobre_total FROM DeficienciaCandidato LEFT JOIN Candidato ON Candidato.id = DeficienciaCandidato.id_candidato GROUP BY tipo_deficiencia ORDER BY total_de_pessoas_com_essa_deficiencia DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação entre os tipos de deficiência das pessoas PcD cadastradas no banco de dados (incluindo funcionários e candidatos) com as pessoas não PcD";
                break;
        }
        const resultado = await Promise.resolve(promises);
        return {tipoConsulta, resultado}
    }

    async listar_candidatos_pcd(pagina, funcionario=null){
        let candidatos;
        let totRegistrosConsulta;
        let tipoConsulta;
        if(funcionario === null){
            candidatos = await CandidatoModel.findAll(
                {
                    where: {
                        pcd: true
                    },
                    limit: 20,
                    offset: 20*(pagina-1),
                    order: [["nome", "ASC"]]
                }
            );
            totRegistrosConsulta = await CandidatoModel.count({
                where: {
                pcd: true
                }
            })
            tipoConsulta = "Todas as pessoas PcD cadastradas no sistema, incluindo candidatos e funcionários";
        } else if(funcionario) {
            candidatos = await CandidatoModel.findAll(
                {
                    where: {
                        pcd: true,
                        [Op.not]: {
                            data_contratacao: null
                        }
                    },
                    limit: 20,
                    offset: 20*(pagina-1),
                    order: [["nome", "ASC"]]
                }
            );
            totRegistrosConsulta = await CandidatoModel.count({
                where: {
                    pcd: true,
                    [Op.not]: {
                        data_contratacao: null
                    }
                },
            })
            tipoConsulta = "Apenas os funcionários PcD contratados e em atividade";
        } else {
            candidatos = await CandidatoModel.findAll(
                {
                    where: {
                        pcd: true,
                        data_contratacao: null
                    },
                    limit: 20,
                    offset: 20*(pagina-1),
                    order: [["nome", "ASC"]]
                }
            );
            totRegistrosConsulta = await CandidatoModel.count({
                where: {
                    pcd: true,
                    data_contratacao: null
                },
            })
            tipoConsulta = "Apenas os candidatos PcD ainda não contratados";
        }
        const totRegistrosEnviadosNaPagina = candidatos.length;
        return {pagina: parseInt(pagina), totRegistrosConsulta, tipoConsulta, totRegistrosEnviadosNaPagina, candidatos};
    }

    async percentual_pcd(consulta){
        let promises;
        let tipoConsulta;
        switch (consulta) {
            case "funcionarios":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT (CASE WHEN (pcd=true) THEN  ("pcd") ELSE( "não pcd" ) END) AS "condicao", COUNT(*) AS quantidade FROM Candidato WHERE data_contratacao IS NOT NULL GROUP BY condicao ORDER BY quantidade DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação entre funcionários PcD e não PcD";
                break;
            case "candidatos":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT (CASE WHEN (pcd=true) THEN  ("pcd") ELSE( "não pcd" ) END) AS "condicao", COUNT(*) AS quantidade FROM Candidato WHERE data_contratacao IS NULL GROUP BY condicao ORDER BY quantidade DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação candidatos PcD e não PcD";
                break;
            case "desligados":
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT (CASE WHEN (pcd=true) THEN  ("pcd") ELSE( "não pcd" ) END) AS "condicao", COUNT(*) AS quantidade FROM Candidato WHERE data_demissao IS NOT NULL GROUP BY condicao ORDER BY quantidade DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação entre funcionários desligados PcD e não PcD";
                break;
            default:
                promises = new Promise(function(resolve, reject){
                    sequelize.query(`SELECT (CASE WHEN (pcd=true) THEN  ("pcd") ELSE( "não pcd" ) END) AS "condicao", COUNT(*) AS quantidade FROM Candidato GROUP BY condicao ORDER BY quantidade DESC;`)
                    .then(result => resolve(result[0]))
                    .catch(error => reject(error))
                })
                tipoConsulta = "Relação entre as pessoas PcD e não PcD cadastradas no banco ";
                break;
        }
        const resultado = await Promise.resolve(promises);
        const totalPessoas = resultado[0].quantidade+resultado[1].quantidade;
        resultado[0].percentual = (resultado[0].quantidade/totalPessoas*100).toFixed(2);
        resultado[1].percentual = (resultado[1].quantidade/totalPessoas*100).toFixed(2);
        return {tipoConsulta, resultado};
    }

    async buscar_por_cpf(cpf){
        const candidato = await CandidatoModel.findOne({
            where: {
                cpf: cpf
            }
        });
        if(candidato){
            return candidato.dataValues;
        }
        return null;
    }

    async buscar_por_email(email){
        const candidato = await CandidatoModel.findOne({
            where: {
                email: email
            }
        });
        if(candidato){
            return candidato.dataValues;
        }
        return null;
    }

    async buscar_por_id(id){
        const candidato = await CandidatoModel.findByPk(id);
        if(candidato){
            return candidato.dataValues;
        }
        return null;
    }

    async contratar(candidato, data_contratacao, usuario, nivel_acesso){
        const candidatoContratado = await CandidatoModel.update({
            data_contratacao: data_contratacao,
            usuario_alterou: usuario.id,
            nivel_acesso: nivel_acesso,
            data_demissao: null
        }, {
            where: {
                id: candidato.id
            }
        }
        )
        return candidatoContratado;
    }
    
    async desligar(candidato, data_demissao, usuario){
        const candidatoDesligado = await CandidatoModel.update({
            data_ultima_contratacao: candidato.data_contratacao,
            data_contratacao: null,
            usuario_alterou: usuario.id,
            nivel_acesso: "0",
            data_demissao: data_demissao
        }, {
            where: {
                id: candidato.id
            }
        }
        )
        return candidatoDesligado;
    }

    async setar_pcd(candidato){
        const candidatoPcd = await CandidatoModel.update({
            pcd: true
        },
        {
            where: {
                id: candidato.id
            }
        })
    }
}

const candidatoRepository = new CandidatoRepository();

module.exports = candidatoRepository