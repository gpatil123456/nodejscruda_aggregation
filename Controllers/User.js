const { response } = require('express')
const Employee = require('../models/Employee')
const User = require('../models/User')

//show list
const index=(req,res,next)=>{
    User.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error =>{
res.json({
    message:'An error occurd'

})
    
        
})
}
//show single employe
const show=(req,res,next)=>{
    let userID=req.body.userID
    User.findById(userID)
    .then(response=> {
        res.json({
            response
        })
    })
    .catch(error => {
res.json({
    message:'An error occurd'

})
})
}
//add new employee

const store=(req,res,next)=>{
    let user=new User({
    name:req.body.name,
    Deparement:req.body.Deparement,
     id:req.body.id,
 //   EmployeeID:req.body.EmployeeID
    })
    user.save()
    .then(response =>{
        res.json({
            message:'User added successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })
}

//update
const update =(req,res,next)=>{
    let userID= req.body.userID
    let updatedData={
        name:req.body.name,
        Deparement:req.body.Deparement,
          id:req.body.id  , 
        //  EmployeeID:req.body.EmployeeID

    }
    User.findByIdAndUpdate(userID,{$set:updatedData})
    .then(() =>{
        res.json({
            message:'user updated successfully'
            
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })
}

//delete
const destroy =(req,res,next)=>{
    let userID= req.body.userID
    User.findByIdAndRemove(userID)
    .then(() =>{
        res.json({
            message:'user deleteted successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })

}
module.exports={
    index, show, store, update, destroy
}