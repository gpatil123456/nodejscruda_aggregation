const express = require('express')
const router= express.Router()
const UserController =require('../Controllers/User')

router.get('/index',UserController.index)

router.get('/show',UserController.show)
router.post('/store',UserController.store)
router.put('/update',UserController.update)
router.delete('/delete',UserController.destroy)
module.exports=router;