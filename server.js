const express = require ('express')
const mongoose= require ('mongoose')
//const MongoClient = require('mongodb').MongoClient;
 const morgan =  require ('morgan')
 const bodyParser =  require ('body-parser') 
 const EmployeeRoute= require ('./routes/employee')
 const Employee = require('./models/Employee')
 const UserRoute= require ('./routes/user')
 const User = require('./models/User')
 const res = require('express/lib/response')
 mongoose.connect ('mongodb://localhost:27017/cruds',{useNewUrlParser: true , useUnifiedTopology: true})
 const db = mongoose.connection 
 db.on ( 'error' , (err) => { 
     console.log (err) 
   })
      db.once ( 'open' ,() => { 
          console.log (' Database Connection Established !')
      }) 
      const app=express()

      app.use (morgan( 'dev'))
      
 app.use ( bodyParser.urlencoded ( { extended : true } ))
 app.use( bodyParser.json())
 
 app.listen(1744,() =>{
     console.log (`server is running on port 1744`)
 })
// module.exports={
//   find:async(req,res)=>{ss
//     try{
//       cruds.collection('employee').aggregate([
//         {
//         '$lookup': {
//              'from': 'employees',//other table name
//             'localField': 'employeeID',//name of car table field
//             'foreignField': 'userID',//name of cardetails table field
//              'as': 'cardetails'//alias for cardetails table
//                    }
//                  },
                 
//                  {
//                      '$unwind': {
//                          'path': '$cardetails' 
//                      }
//                  }
//              ]).toArray((err,result)=>{
//                res.ok(result)
//              })
    
//   }
//   catch(error)
//   {
// res.serverError(error)
//   }
// }
// }
 Employee.aggregate([
      {
      $lookup: {
          from:"users",
          localField:"id",
          foreignField: "id",
       //  as: "Order_by",
       as:"Department_info"
        },   
      },
   
      {
      //   $unwind: "$Order_by",
      $unwind:"$Department_info"
       },
    ])
      .then((like) => {
      console.log(like);
     //res.json(result); 
  //   router.get('/index',EmployeeController.index)   
      })
      .catch((error) => {
      console.log(error);
      // res.json(error);
       
      });


 app.use('/api/User',UserRoute)

 app.use('/api/Employee',EmployeeRoute)