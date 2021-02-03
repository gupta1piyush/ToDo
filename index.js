const express=require('express');
const path=require('path');
const port=8700;

//commands for including database in server
const db=require('./config/mongoose');
//command for using schema model
const Todo=require('./models/todo')
//allowing our app to use express
const app=express();
//telling application to use ejs as its view engine
app.set('view engine','ejs');
//path of using ejs as a view engine
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
//path to use static files
app.use(express.static('assets'));

app.get('/',function(req,res){
  Todo.find({},function(err,todos){
    if(err){
      console.log("Error in fetching list");
      return;
    }
    return res.render('home',{
      description_list:todos
    });
  })
});
//mentioning the routes of adding description
app.post('/create-description',function(req,res){
  Todo.create({
    description:req.body.description,
    category:req.body.category,
    date:req.body.date
  },function(err,newDescription){
    if(err){
      console.log('error in creating description');
      return;
}
  console.log('**********',newDescription);
  return res.redirect('back');
  });
})
//at port number to be explained
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server",err);
    }
    console.log("Yup!My Server is running on port",port);
});
//route to delete-task i.e to delte the task which is done
app.get('/delete-contact', function(req, res){

  let id = req.query.id;
  //find the contact in the database to be deleted
  Todo.findByIdAndDelete(id,function(err){
      if(err)
      {
         console.log('Error in deleting the argument drom db');
         return; 
      }
      return res.redirect('back');

  });

});