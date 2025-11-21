'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subjects', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        comment: 'e.g., MATH101, ENG201',
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      color: {
        type: Sequelize.STRING(7),
        allowNull: true,
        comment: 'Hex color code for UI display',
      },
      coefficient: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: false,
        defaultValue: 1.00,
        comment: 'Weight for grade calculations',
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Add indexes
    await queryInterface.addIndex('subjects', ['code']);
    await queryInterface.addIndex('subjects', ['is_active']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subjects');
  },
};
