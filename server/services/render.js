const axios = require('axios');
// This is the page responsible for managing the pages according to the required given output 
// Swithching between the pages is done by this only 

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')

    // The line axios.get('http://localhost:3000/api/users') is making an HTTP GET request to the specified URL 'http://localhost:3000/api/users' using the Axios library.
    // Here's a breakdown of the line:
    // axios: Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js. It provides a simple and intuitive API for performing various HTTP operations.
    // .get(): This is a method provided by Axios to make an HTTP GET request. It is used to retrieve data from the specified URL.
    // 'http://localhost:3000/api/users': This is the URL to which the GET request is being made. In this case, it is 'http://localhost:3000/api/users'. The URL points to the /api/users endpoint on the local server running on localhost at port 3000. This endpoint is expected to handle the request and return the desired data.
    // By making this GET request, the code is attempting to retrieve user data from the specified URL. The response from the server will contain the data, which can then be accessed in the subsequent .then() block to perform further actions, such as rendering the data in a view or processing it in some way.

    // 

        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}



