const signUp = require('../models/signUp');

const homePage = (req,res) => {
    const id = req.params.id;
    signUp.findById(id , (err,result)=>{
        if(err){
            res.redirect('/');
        }
        else if(result==null){
            res.redirect('/');
        }
        else{
            res.render('tasks' , {title: `tasks|${id}` , id: id , name: result.firstName , tasks: result.allTasks});
        }
    })
};

const addTask = (req,res) => {
    const idd = req.params.id;
    signUp.findOneAndUpdate({_id: idd} , {$push: {allTasks: req.body.task}} , function(error,success){
        if(error){
            console.log(error);
        }
        else{
            console.log(success);
        }
    })
    res.redirect(`/tasks/${idd}`);

};

const deleteTask = (req,res) => {
    console.log(req.params);
    const idd= req.params.id;
    console.log(req.body);
    signUp.updateOne({_id: idd} , {$pull: {allTasks: req.body.task}} , function(error,success){
        if(error){
            console.log(error);
        }
        else{
            console.log(success);
        }
    })
    res.send(JSON.stringify({success: true}));
};

module.exports = {
    homePage,
    addTask,
    deleteTask
}