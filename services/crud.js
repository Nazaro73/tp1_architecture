const User = require('../models/User');
const Profile = require('../models/Profile');

async function getAllUsers(req, res) {
    const users = await User.findAll();
    res.json(users);
}

async function getUserById(req, res) {
    const user = await User.findByPk(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
}

async function updateUser(req, res) {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
}

async function deleteUser(req, res) {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({ message: 'Utilisateur supprimé' });
    } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
}

async function createUser(req, res) {
    const isAdmin = req.body.email.endsWith('@company.com');
    const profile = await Profile.findOne({ where: { role: isAdmin ? 'admin' : 'user' } });

    if (!profile) {
        return res.status(400).json({ message: 'Profile non trouvé' });
    }

    const userData = {
        ...req.body,
        id_profile: profile.id
    };

    const user = await User.create(userData);
    res.json(user);
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
};