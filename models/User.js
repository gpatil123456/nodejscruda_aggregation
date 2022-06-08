 const mongoose = require('mongoose');
const Employee = require('./Employee');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String
    },
Deparement:{ 
        type : String
    },
id:{
    type:Number
}
//employeesID:{
//model:Employee
//}

} , {timestamps:true})
const User = mongoose.model('User',userSchema)
module.exports=User;