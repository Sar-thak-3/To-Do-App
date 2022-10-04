const signUp = require('../models/signUp');

const signUpPage = ((req,res) => {
    res.render('signUp' , {title: "Sign Up"});
});

const signingUp = (req,res) => {
    const newsignUp = new signUp(req.body);
    newsignUp.save()
    .then((result) => {
        res.redirect(`/tasks/${newsignUp.id}`);
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = {
    signUpPage,
    signingUp
}