const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const signUpRoutes = require('./routes/signUpRoutes');
const loginRoutes = require('./routes/logInRoutes');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const dbURI = "mongodb+srv://shibu:shibu0303@nodetuts.lddgtlx.mongodb.net/TodO-tasks?retryWrites=true&w=majority";
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nodetuts.lddgtlx.mongodb.net/${process.env.DB_BASE}?retryWrites=true&w=majority`;
mongoose.connect(dbURI , {useNewUrlParser: true , useUnifiedTopology: true})
    .then((result) => {app.listen(3000);
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

app.set('view engine' , 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/' , (req,res) => {
    res.render('index' , {title: "Home Page"});
});

app.use('/signUp' , signUpRoutes);

app.use('/logIn' , loginRoutes);

app.use('/tasks' , taskRoutes);

app.use((req,res) => {
    res.status(404).render('404' , {title: '404'});
});