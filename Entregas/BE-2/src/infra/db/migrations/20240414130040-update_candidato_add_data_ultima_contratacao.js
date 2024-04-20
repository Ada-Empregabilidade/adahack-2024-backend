'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Candidato",
      "data_ultima_contratacao",
      {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Candidato", "data_ultima_contratacao")
  }
};
