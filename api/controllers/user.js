const bcrypt = require('bcrypt');

const User = require('../models/user');

async function register (req, res) {
    try {
        const data = req.body;

        // Generate a salt with a specfic cost
        

        // Hash the password

        const result = await User.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
};

// async function show (req, res) {
//     try {
//         const id = parseInt(req.params.id);
//         const post = await Post.getOneById(id);
//         res.json(post);
//     } catch (err) {
//         res.status(404).json({"error": err.message})
//     }
// };

// async function destroy (req, res) {
//     try {
//         const id = parseInt(req.params.id);
//         const post = await Post.getOneById(id);
//         const result = await post.destroy();
//         res.status(204).end();
//     } catch (err) {
//         res.status(404).json({"error": err.message})
//     }
// };

module.exports = {
    register, show
}
