const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true, // Fixed typo in "require"
    },
});

// Use module.exports, not mongoose.exports
module.exports = mongoose.model('ToDo', todoSchema);
