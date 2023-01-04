let DBServices = require('../services/capstoneProjectDBServices')

const retrieveAllUserDetails = async (req, res) => { // import , used in routes.js

    let data = await DBServices.getAllDataFromUserDetails(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)
}

const retrieveAllUserProfileDetails = async (req, res) => { // import , used in routes.js

    let data = await DBServices.getAllDataFromUserProfile(req,res)  // getUserProfileFromDB from services js file
    console.log(data)
    res.send(data)
}

const retrieveAllUserProfilePost = async (req, res) => { // import , used in routes.js

    let data = await DBServices.getAllDataFromUserPost(req,res)  // getUserPostFromDB from services js file
    console.log(data)
    res.send(data)
}

const addUserstoDB = async (req, res) => { // import , used in routes.js

    let data = await DBServices.postNewUsersDetails(req,res)  // getUserPostFromDB from services js file
    console.log(data)
    res.send(data)
}

const userLogin = async (req, res) => { // import , used in routes.js

    let data = await DBServices.login(req,res)  // getUserPostFromDB from services js file
    console.log(data)
    res.send(data)
}

const addPost = async (req, res) => { // import , used in routes.js

    let data = await DBServices.newPost(req,res)  // getUserPostFromDB from services js file
    console.log(data)
    res.send(data)
}

module.exports = {retrieveAllUserDetails, retrieveAllUserProfileDetails, retrieveAllUserProfilePost, addUserstoDB, userLogin, addPost}
