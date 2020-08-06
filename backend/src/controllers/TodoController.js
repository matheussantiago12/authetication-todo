const User = require('../models/Todo');
const Todo = require('../models/Todo');

// index, show, store, update, destroy

module.exports = {
    async index (req, res) {
        const todos = await Todo.find({});

        return res.json(todos);
    },
    
    async store (req, res) {
        try {
            const { title } = req.body;
            const todo = await Todo.create({ title });
    
            return res.json(todo);
        } catch (error) {
            return res.status(400).json({ error: 'Fail on creating todo'});
        }
    },

    async destroy (req, res) {
        const { id } = req.params;

        await Todo.deleteOne({ _id: id });

        return res.json({
            message: 'Todo succesfuly deleted',
            id,
        });
    }
}