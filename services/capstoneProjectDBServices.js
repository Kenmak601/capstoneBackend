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
                    resolve({status:"Login success"})
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


module.exports = {getAllDataFromUserDetails, getAllDataFromUserProfile, getAllDataFromUserPost, postNewUsersDetails, login, newPost}