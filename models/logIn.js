const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logInSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
} , {timestamps: true});

const logIn = mongoose.model('logIn' , logInSchema);

module.exports = logIn;