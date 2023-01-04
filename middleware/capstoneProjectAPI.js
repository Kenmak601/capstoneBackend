const axios = require('axios');

//// change this api to suit the capstone Project////////

const fetchAllUserDetails = async () => { 
    const options = {
        method: 'GET',
        url: 'http://localhost:4000/capstoneProject/getAllUserDetails', 
        headers: {
          accept: 'application/json',
          "Accept-Encoding":'*' //  this line is to fix the issue with api random characters
        }
      };
    const response = await axios.request(options)
    .then((json) => {
        console.log(json)
        return (json.data)
    })
    return response
    }



module.exports = {fetchAllUserDetails};