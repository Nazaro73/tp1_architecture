const { DataTypes } = require('sequelize');
const sequelize = require('./_database');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    display_name: DataTypes.STRING,
    password: DataTypes.STRING,
});

module.exports = User;
