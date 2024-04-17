'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("DeficienciaCandidato", {
      id: {
        type: Sequelize.STRING(40),
        primaryKey: true,
      },
      id_candidato: {
          type: Sequelize.STRING(40),
          allowNull: false,
          references: {
            model: 'Candidato',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      tipo_deficiencia: {
          type: Sequelize.ENUM("visual", "auditiva", "mental", "intelectual", "espectro autista", "física"),
          allowNull: false
      },
      descricao: {
          type: Sequelize.STRING(255),
          allowNull: true
      },
      cid: {
          type: Sequelize.STRING(10),
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("DeficienciaCandidato")
  }
};
