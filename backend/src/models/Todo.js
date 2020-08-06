const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    complete: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
