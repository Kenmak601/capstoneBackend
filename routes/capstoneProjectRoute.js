var express = require('express'); //lets us use the express library imports express library
var router = express.Router(); //lets us use the router functinalitis of express

var capstoneProjectController = require('../controllers/capstoneProjectController') // uses the controller file
		
router.get('/test', (req, res) => // setting "/test" as end point
{
    res.send('Hello World! /test end point JS Working')
})

router.get('/getAllUserDetails',(req,res)=>{ // retrieve all user data from mysql table
    console.log("router here")
    capstoneProjectController.retrieveAllUserDetails(req,res)
})

router.get('/getAllUserProfileDetails',(req,res)=>{ // retrieve all profile from mysql table
    console.log("router here")
    capstoneProjectController.retrieveAllUserProfileDetails(req,res)
})

router.get('/getAllUserProfilePost',(req,res)=>{ // retrieve all profile post from mysql table
    console.log("router here")
    capstoneProjectController.retrieveAllUserProfilePost(req,res)
})

router.post('/SignUp',(req,res)=>{ // user signup
    console.log("router here")
    capstoneProjectController.addUserstoDB(req,res)
})

router.post('/Login',(req,res)=>{ // user Login
    console.log("router here")
    capstoneProjectController.userLogin(req,res)
})

router.post('/addPost',(req,res)=>{ // user Login
    console.log("router here")
    capstoneProjectController.addPost(req,res)
})


module.exports = router; // export