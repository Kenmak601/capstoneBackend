const sql = require("../index") // module export from index sql connects to here

let getAllDataFromUserDetails = async (req, res)=>{ // CRUD - retrieve all data from User Details Mysql Table
    console.log("db services All User Details here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM user_details`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let getAllDataFromUserProfile = async (req, res)=>{ // CRUD - retrieve all data from User Details Mysql Table
    console.log("db services All User Profile here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM user_profile`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let getAllDataFromUserPost = async (req, res)=>{ // CRUD - retrieve all data from User Details Mysql Table
    console.log("get all userpost data here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM user_post`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let postNewUsersDetails = async (req, res)=>{ // CRUD - retrieve all data from User Details Mysql Table
    console.log("post new user details to db here")
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO user_details(fName, lName, username, password, email) VALUES ("${firstName}","${lastName}","${username}","${password}","${email}")`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let login = async (req, res)=>{ // CRUD - retrieve all data from User Details Mysql Table
    console.log("post new user details to db here")
    let username = req.body.username
    let password = req.body.password
    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM user_details WHERE username = "${username}" `;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            if(result.length > 0 )
            {
                if (password == result[0].password)
                {
                    resolve({status:"Login success",currentUser: result})

                }
                else
                {
                    resolve({status:"Login fail"})
                }
            }
            else
            {
                resolve({status:"no username found or entered incorrectly"})
            }

        });
    });
}

let newPost = async (req, res)=>{ // CRUD - create new post
    console.log("new post details details to db here")
    let username = req.body.username
    let newTitle = req.body.postTitle
    let newContent = req.body.postContent
    
    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO user_post(username, postTitle, postContent) VALUES ("${username}","${newTitle}","${newContent}")`; // **need to add the username in values**
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let updatePost = async (req, res)=>{ // CRUD - update post
    console.log("update post to db here")
    let postId = req.body.postId // req.body.(match front end)
    let updatedTitle = req.body.postTitle
    let updatedContent = req.body.postContent
    
    return new Promise((resolve, reject) => {
        let sqlQuery = `UPDATE user_post SET postTitle="${updatedTitle}", postContent="${updatedContent}" WHERE postId="${postId}"`; // **need to add the username in values**
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let deletePostFromDB = async (req, res)=>{ // CRUD - delete
    
    let postId = req.body.postId

    return new Promise((resolve, reject) => {
        let sqlQuery = `DELETE FROM user_post WHERE postId = ${postId}`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let fetchByUsername = async (req, res)=>{ // CRUD - retrieve all data from User Details Mysql Table
    console.log("db services All User Profile here")

    let username = req.query.username

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM user_post WHERE username = "${username}" ORDER BY user_post.postDateTime DESC;`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let addFriendsToDB = async (req, res)=>{ // insert into user friends
    console.log("db services All User Profile here")

    let username = req.body.username
    let friendName = req.body.friendUserName

    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO user_friends (loggedInUser, friendUsername) VALUES ("${username}", "${friendName}")`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let searchFriendsFromDB = async (req, res)=>{ // search keywords from title
   
    return new Promise((resolve, reject) => {

        
        let searchInput = req.query.searchInput
        let sqlQuery = `SELECT * FROM user_details WHERE username LIKE "%${searchInput}%"`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let fetchAllFriendsFromDB = async (req, res)=>{ // search friendname from user_Friends db table according to logggedinUser
    console.log("get all friends data here")

    return new Promise((resolve, reject) => {

        let loggedInUser = req.query.loggedInUser

        let sqlQuery = `SELECT friendUsername FROM user_friends WHERE loggedInUser = "${loggedInUser}"`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let fetchFriendsPostFromDB = async (req, res)=>{ // CRUD - retrieve all post on friends list to show on homepage
    console.log("get all friends data here")

    return new Promise((resolve, reject) => {

        let loggedInUser = req.query.loggedInUser

        let sqlQuery = `SELECT user_post.postId, user_post.username, user_post.postTitle, user_post.postContent,user_post.postDateTime, user_friends.loggedInUser 
                            FROM user_friends INNER JOIN user_post ON user_friends.friendUsername=user_post.username 
                            WHERE user_friends.loggedInUser= "${loggedInUser}" ORDER BY user_post.postDateTime DESC;`;//CHANGE THIS SQL TO SHOW ALL FRIENDS POST ON HOMEPAGE
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let fetchPostByFriendNameFromDB = async (req, res)=>{ // show all post from friend after friendUsername button is pressed
    console.log("display post by friend name data here")

    return new Promise((resolve, reject) => {

        let username = req.query.username

        let sqlQuery = `SELECT * FROM user_post WHERE username = "${username}" ORDER BY user_post.postDateTime DESC`; 
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let fetchAllMarketplaceItems = async (req, res)=>{ // CRUD - retrieve all data from User Details Mysql Table
    console.log("db services All User Details here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM marketplace`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let addItemtoDB = async (req, res)=>{ // CRUD - create new post
    console.log("add item to db here")
    let itemName = req.body.itemName
    let itemDescription = req.body.itemDescription
    let itemPrice = req.body.itemPrice
    let itemImage = req.body.itemImage
    let itemLink = req.body.itemLink
    
    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO marketplace(itemName, itemDescription, itemPrice, itemImage, itemLink) VALUES ("${itemName}","${itemDescription}","${itemPrice}","${itemImage}","${itemLink}")`; 
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

module.exports = {getAllDataFromUserDetails, getAllDataFromUserProfile, getAllDataFromUserPost, postNewUsersDetails, login, newPost, 
                    updatePost, deletePostFromDB, fetchByUsername, addFriendsToDB, searchFriendsFromDB, fetchAllFriendsFromDB, 
                    fetchFriendsPostFromDB, fetchPostByFriendNameFromDB, fetchAllMarketplaceItems, addItemtoDB}