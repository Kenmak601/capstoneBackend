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

router.post('/addPost',(req,res)=>{ // add post
    console.log("router here")
    capstoneProjectController.addPost(req,res)
})

router.put('/editPost',(req,res)=>{ // edit post
    console.log("router here")
    capstoneProjectController.editPost(req,res)
})

router.delete('/deletePost',(req,res)=>{ // delete post
    console.log("router here")
    capstoneProjectController.deletePost(req,res)
})

router.get('/filterByUsername',(req,res)=>{ // filter by username
    console.log("router here")
    capstoneProjectController.filterUsername(req,res)
})

router.post('/addFriends',(req,res)=>{ // add friends
    console.log("router here")
    capstoneProjectController.addFriends(req,res)
})

router.get('/searchFriends',(req,res)=>{ // search friends
    console.log("router here")
    capstoneProjectController.searchFriends(req,res)
})

router.get('/showAllFriends',(req,res)=>{ // display all friends
    console.log("router here")
    capstoneProjectController.showAllFriends(req,res)
})

router.get('/displayAllFriendsPost',(req,res)=>{ // edisplay all friends post on userhomepage
    console.log("router here")
    capstoneProjectController.allFriendsPostDisplay(req,res)
})

router.get('/displayPostByFriendName',(req,res)=>{ // display all friends post by friendname
    console.log("router here")
    capstoneProjectController.displayPostByFriendName(req,res)
})

router.get('/displayAllMarketplaceItems',(req,res)=>{ // display all marketplace items
    console.log("router here")
    capstoneProjectController.displayAllMarketplaceItems(req,res)
})

router.post('/addItemMarketplace',(req,res)=>{ // add items to marketplace
    console.log("router here")
    capstoneProjectController.addItemMarketplace(req,res)
})

module.exports = router; // export