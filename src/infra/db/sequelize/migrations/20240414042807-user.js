'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('tb_users', {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    position: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    encrypted_password: {
      type: Sequelize.STRING(120),
      allowNull: false
    },
    salt: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    education_level: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    nationality: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    gender: {
      type: Sequelize.BOOLEAN(),
      allowNull: false
    },
    color: {
      type: Sequelize.BOOLEAN()
    },
    sexual_orientation: {
      type: Sequelize.BOOLEAN()
    },
    pcd: {
      type: Sequelize.BOOLEAN()
    },
    over60: {
      type: Sequelize.BOOLEAN()
    },
    user_type: {
      type: Sequelize.ENUM(['admin', 'manager', 'worker'])
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('tb_users');
}
