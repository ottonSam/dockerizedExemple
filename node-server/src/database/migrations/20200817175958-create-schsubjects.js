'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('sch_subject', {
        sch_id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
        },
        sch_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sch_created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        sch_updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        
      });
      
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('sch_subject');

  }
};
