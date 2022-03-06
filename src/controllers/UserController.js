const User = require('../models/User');

module.exports = {
    
    async createUser(req, res) {
        try {
            const { name, email } = req.body;

            if(name === "" || email === "") {
                return res.status(411).json({ message: 'Informe nome e email' });
            }

            const user = await User.findOne({ where: { email } });

            if(user) {
                return res.status(409).json({ message: 'Email já cadastrado' });

            } else {
                const user = await User.create({ name, email });

                return res.status(201).json({ user });
            }
            
        } catch (error) {
            return res.status(400).json({ error });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;

            const { name, email } = req.body;

            if(name === "" || email === "") {
                return res.status(411).json({ message: 'Informe nome e email' });
            }

            let user = await User.findOne({ where: { id } });

            if(!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            if(name !== user.name || email !== user.email) {
                user = await User.update({ name, email }, { where: { id } });

                return res.status(201).json({ user });

            } else {
                return res.status(409).json({ message: 'Informe nome ou email diferentes' });
            }


        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async listAllUsers(req, res) {
        try {
            const users = await User.findAll();
        
            if(users.length > 0) {
                return res.status(200).json({ users });
            }

            return res.status(404).json({ message: 'Não existem usuários cadastrados' });

        } catch (error) {
            return res.status(400).json({ error });
        }
    },

    async listOneUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findOne({ where: { id } });

            if(!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            } 

            return res.status(200).json({ user });
            
        } catch (error) {
            return res.status(400).json({ error });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findOne({ where: { id } });

            if(!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            await User.destroy({ where: { id } });

            return res.status(200).json({ Deleted: true });

        } catch (error) {
            return res.status(400).json({ error });
        }
    },
};