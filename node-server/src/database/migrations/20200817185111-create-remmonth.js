'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rem_months', {
      rem_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rem_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rem_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rem_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('rem_months');

  }
};
