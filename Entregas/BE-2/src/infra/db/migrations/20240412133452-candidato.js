'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Candidato", {
      id: {
        type: Sequelize.STRING(40),
        primaryKey: true,
      },
      nome: {
          type: Sequelize.STRING(255),
          allowNull: false,
      },
      cpf: {
          type: Sequelize.STRING(15),
          allowNull: false
      },
      email: {
          type: Sequelize.STRING(255),
          allowNull: false
      },
      senha: {
          type: Sequelize.STRING(255),
          allowNull: false
      },
      data_nascimento: {
          type: Sequelize.DATE,
          allowNull: false
      },
      sexo_biologico: {
          type: Sequelize.ENUM("m", "f"),
          allowNull: false
      },
      etnia: {
          type: Sequelize.ENUM("amarela", "branca", "preta", "parda", "indígena", "prefiro não informar"),
          allowNull: false
      },
      identidade_genero: {
          type: Sequelize.ENUM("cis", "trans", "não-binário", "prefiro não informar"),
          allowNull: false
      },
      orientacao_sexual: {
          type: Sequelize.ENUM("heterossexual", "homossexual", "bissexual", "assexual", "pansexual", "prefiro não informar"),
          allowNull: false
      },
      pcd: {
          type: Sequelize.BOOLEAN,
          allowNull: false
      },
      data_contratacao: {
          type: Sequelize.DATE,
          allowNull: true
      },
      data_demissao: {
          type: Sequelize.DATE,
          allowNull: true
      },
      nivel_acesso: {
          type: Sequelize.ENUM("0", "1", "2", "3", "4", "5"),
          defaultValue: "0",
          allowNull: false,
      },
      usuario_alterou: {
          type: Sequelize.STRING,
          allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    }, {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
      freezeTableName: true,
      underscores: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Candidato");
  }
};
