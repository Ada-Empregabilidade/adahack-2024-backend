const CandidatoModel = require("./Candidato");
const sequelize = require("..");
const { DataTypes } = require("sequelize");

const DeficienciaCandidatoModel = sequelize.define("DeficienciaCandidato", {
    id: {
        type: DataTypes.STRING(40),
        primaryKey: true,
    },
    id_candidato: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    tipo_deficiencia: {
        type: DataTypes.ENUM("visual", "auditiva", "mental", "intelectual", "espectro autista", "física"),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    cid: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
},

{
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    freezeTableName: true,
    underscored: true,
}
)

DeficienciaCandidatoModel.belongsTo(CandidatoModel, {
    foreignKey: 'id_candidato',
    targetKey: "id",
})

module.exports = DeficienciaCandidatoModel;