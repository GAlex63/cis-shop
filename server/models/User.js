const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const roles = require("../constants/role");

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true, 
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        defaultValue: roles.USER
    },

},
    {
        tableName: 'users',
        timestamps: true,
        createdAt: 'registered_at',
        updatedAt: false,
    }
)


module.exports = User;