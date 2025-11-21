'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Student-Class enrollment table
    await queryInterface.createTable('student_classes', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      student_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      class_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'classes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      enrollment_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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

    // 2. Class-Subject relationship table
    await queryInterface.createTable('class_subjects', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      class_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'classes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      subject_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'subjects',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

    // 3. Teacher assignments table
    await queryInterface.createTable('teacher_assignments', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      teacher_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      class_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'classes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      subject_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'subjects',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      is_primary: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: 'Is this the main teacher for this class?',
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

    // 4. Parent-Student relationship table
    await queryInterface.createTable('parent_students', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      parent_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      student_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      relationship: {
        type: Sequelize.STRING(50),
        allowNull: true,
        comment: 'e.g., Mother, Father, Guardian',
      },
      is_primary: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        comment: 'Primary contact for this student',
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

    // Add indexes for better query performance
    await queryInterface.addIndex('student_classes', ['student_id']);
    await queryInterface.addIndex('student_classes', ['class_id']);
    await queryInterface.addIndex('student_classes', ['student_id', 'class_id'], {
      unique: true,
      name: 'unique_student_class',
    });

    await queryInterface.addIndex('class_subjects', ['class_id']);
    await queryInterface.addIndex('class_subjects', ['subject_id']);
    await queryInterface.addIndex('class_subjects', ['class_id', 'subject_id'], {
      unique: true,
      name: 'unique_class_subject',
    });

    await queryInterface.addIndex('teacher_assignments', ['teacher_id']);
    await queryInterface.addIndex('teacher_assignments', ['class_id']);
    await queryInterface.addIndex('teacher_assignments', ['subject_id']);

    await queryInterface.addIndex('parent_students', ['parent_id']);
    await queryInterface.addIndex('parent_students', ['student_id']);
    await queryInterface.addIndex('parent_students', ['parent_id', 'student_id'], {
      unique: true,
      name: 'unique_parent_student',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('parent_students');
    await queryInterface.dropTable('teacher_assignments');
    await queryInterface.dropTable('class_subjects');
    await queryInterface.dropTable('student_classes');
  },
};
