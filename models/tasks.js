const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    }
});

const taskIn = mongoose.model(`taskIn` , taskSchema);

module.exports = taskIn;