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

    let data = await DBServices.postNewUsersDetails(req,res)  // add users to db from services js file
    console.log(data)
    res.send(data)
}

const userLogin = async (req, res) => { // import , used in routes.js

    let data = await DBServices.login(req,res)  // getuserlogin from services js file
    console.log(data)
    res.send(data)

}

const addPost = async (req, res) => { // import , used in routes.js

    let data = await DBServices.newPost(req,res)  // add post, create new post
    console.log(data)
    res.send(data)
}

const editPost = async (req, res) => { // import , used in routes.js

    let data = await DBServices.updatePost(req,res)  // update post 
    console.log(data)
    res.send(data)
}

const deletePost = async (req, res) => { // import , used in routes.js

    let data = await DBServices.deletePostFromDB(req,res)  // delete post
    console.log(data)
    res.send(data)

}

const filterUsername = async (req, res) => { // import , used in routes.js

    let data = await DBServices.fetchByUsername(req,res)  // get by username
    console.log(data)
    res.send(data)

}

const addFriends = async (req, res) => { // add friends

    let data = await DBServices.addFriendsToDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const searchFriends = async (req, res) => { 

    let data = await DBServices.searchFriendsFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    
    res.send(data)

}

const showAllFriends = async (req, res) => { 

    let data = await DBServices.fetchAllFriendsFromDB(req,res)  // show all friends from js file
    console.log(data)
    
    res.send(data)

}

const allFriendsPostDisplay = async (req, res) => { // import , used in routes.js

    let data = await DBServices.fetchFriendsPostFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    
    res.send(data)

}

const displayPostByFriendName = async (req, res) => { // import , used in routes.js

    let data = await DBServices.fetchPostByFriendNameFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    
    res.send(data)

}

const displayAllMarketplaceItems = async (req, res) => { 

    let data = await DBServices.fetchAllMarketplaceItems(req,res) 
    console.log(data)
    
    res.send(data)

}

const addItemMarketplace = async (req, res) => { 

    let data = await DBServices.addItemtoDB(req,res) //add to marketplace
    console.log(data)
    
    res.send(data)

}

module.exports = {retrieveAllUserDetails, retrieveAllUserProfileDetails, retrieveAllUserProfilePost, addUserstoDB, userLogin, 
                    addPost, editPost, deletePost, filterUsername, addFriends, searchFriends, showAllFriends, allFriendsPostDisplay, 
                    displayPostByFriendName, displayAllMarketplaceItems, addItemMarketplace}
