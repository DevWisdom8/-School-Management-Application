const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

module.exports = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
      // Example: User.hasMany(models.Grade, { foreignKey: 'student_id' });
    }

    /**
     * Check if password matches
     */
    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }

    /**
     * Get user info without password
     */
    toJSON() {
      const values = { ...this.get() };
      delete values.password;
      delete values.password_reset_token;
      delete values.email_verification_token;
      return values;
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'First name is required' },
          len: {
            args: [2, 100],
            msg: 'First name must be between 2 and 100 characters',
          },
        },
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Last name is required' },
          len: {
            args: [2, 100],
            msg: 'Last name must be between 2 and 100 characters',
          },
        },
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: {
          msg: 'Email address already in use',
        },
        validate: {
          isEmail: { msg: 'Must be a valid email address' },
          notEmpty: { msg: 'Email is required' },
        },
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Password is required' },
          len: {
            args: [8, 255],
            msg: 'Password must be at least 8 characters',
          },
        },
      },
      role: {
        type: DataTypes.ENUM('student', 'teacher', 'parent', 'admin'),
        allowNull: false,
        defaultValue: 'student',
        validate: {
          isIn: {
            args: [['student', 'teacher', 'parent', 'admin']],
            msg: 'Role must be student, teacher, parent, or admin',
          },
        },
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        validate: {
          len: {
            args: [0, 20],
            msg: 'Phone number must be less than 20 characters',
          },
        },
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profile_photo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      email_verification_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password_reset_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password_reset_expires: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(
              user.password,
              config.security.bcryptRounds
            );
          }
        },
        beforeUpdate: async (user) => {
          if (user.changed('password')) {
            user.password = await bcrypt.hash(
              user.password,
              config.security.bcryptRounds
            );
          }
        },
      },
    }
  );

  return User;
};

