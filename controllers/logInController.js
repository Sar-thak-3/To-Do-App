const { json } = require('express');
const signUp = require('../models/signUp');

const logInPage = ((req,res) => {
    res.render('logIn' , {title: "Log In"});
})

const loggingIn = ((req,res) => {
    signUp.find({}).
    then((result) => {
        result.forEach(element => {
            if(req.body.fullName === element.firstName + " " + element.lastName && req.body.password === element.password){
                let id = element._id.toString();
                res.redirect(`/tasks/${id}`);
            };
        });
        res.redirect(`/login`);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = {
    logInPage,
    loggingIn
};