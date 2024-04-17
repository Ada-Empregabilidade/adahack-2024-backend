const sequelize = require("..");
const { DataTypes } = require("sequelize");

const CandidatoModel = sequelize.define("Candidato", {
    id: {
        type: DataTypes.STRING(40),
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    etnia: {
        type: DataTypes.ENUM("amarela", "branca", "preta", "parda", "indígena", "prefiro não informar"),
        allowNull: false
    },
    identidade_genero: {
        type: DataTypes.ENUM("mulher cis", "homem cis", "mulher trans", "homem trans", "não-binário", "neutro", "agênero"),
        allowNull: false
    },
    orientacao_sexual: {
        type: DataTypes.ENUM("heterossexual", "homossexual", "bissexual", "assexual", "pansexual", "outro"),
        allowNull: false
    },
    pcd: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    data_contratacao: {
        type: DataTypes.DATE,
        allowNull: true
    },
    data_ultima_contratacao: {
        type: DataTypes.DATE,
        allowNull: true
    },
    data_demissao: {
        type: DataTypes.DATE,
        allowNull: true
    },
    nivel_acesso: {
        type: DataTypes.ENUM("0", "1", "2", "3", "4", "5"),
        defaultValue: "0",
        allowNull: false,
    },
    usuario_alterou: {
        type: DataTypes.STRING,
        allowNull: true
    }
},

{
    timestamps: true,
    created_at: true,
    updated_at: true,
    freezeTableName: true,
    underscored: true,
}
)

module.exports = CandidatoModel;