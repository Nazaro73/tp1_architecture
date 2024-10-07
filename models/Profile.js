const { DataTypes } = require('sequelize');
const sequelize = require('./_database');

const Profile = sequelize.define('Profile', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.STRING,
        unique: true
    },
    
});

module.exports = Profile;
