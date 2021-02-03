//library required to install mongoose
const mongoose =require('mongoose');
//to connect with db
mongoose.connect('mongodb://localhost/todo_list');

const db=mongoose.connection;
//condition when connected to db and condt if there is error
db.on('error',console.error.bind(console,'Error connecting to db'));

db.once('open',function(){
    console.log('db connected succesfully');
})