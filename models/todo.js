//same we have to require mongoose as this schema is send to db
const mongoose=require('mongoose');
//preparing schema for the enteries in database
const todoSchema=new mongoose.Schema({
    description : {
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

});
const Todo=mongoose.model('Todo',todoSchema);
//export the data which is entered
module.exports=Todo;
