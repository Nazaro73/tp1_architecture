const Sequelize = require('sequelize');
const sequelize = require('./_database');

// Import des modèles

const User = require('./User');
const Profile = require('./Profile');

// Définition des relations

//un utilisateur à un profile et un profile a plusieurs utilisateurs

User.belongsTo(Profile, { foreignKey: 'id_profile' });
Profile.hasMany(User, { foreignKey: 'id_profile' });

sequelize.sync({ force: false }).then(() => {
    console.log("Database & tables created!");
});

module.exports = {
    
    User,
    Profile
    
};
