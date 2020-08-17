'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sub_content', {
      sub_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sub_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sub_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sub_sch_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'sch_subject', key: 'sch_id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sub_rem_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'rem_months', key: 'rem_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('sub_content');

  }
};
