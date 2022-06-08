const mongoose = require('mongoose')
const User = require('./User')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:{
        type:String
    },
    address:{
        type :String
    },
    id:{
        type:Number
    },
    salary:{
        type: Number
    },
    age:{
        type: Number
    },
   
   

} , {timestamps:true})

const Employee = mongoose.model('Employee',employeeSchema)
module.exports= Employee



