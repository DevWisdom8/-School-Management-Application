'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('classes', {
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
      grade_level: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: 'e.g., Grade 10, Year 5, etc.',
      },
      section: {
        type: Sequelize.STRING(50),
        allowNull: true,
        comment: 'e.g., A, B, C, etc.',
      },
      academic_year: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: 'e.g., 2024-2025',
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 30,
      },
      room_number: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    await queryInterface.addIndex('classes', ['academic_year']);
    await queryInterface.addIndex('classes', ['grade_level']);
    await queryInterface.addIndex('classes', ['is_active']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('classes');
  },
};
