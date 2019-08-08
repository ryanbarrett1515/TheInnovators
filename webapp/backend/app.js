//Import and config of express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');




//Environment
const port = process.env.PORT_NODE || 4000

// Using CORS
app.use(cors())


// Using BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





//___________________________________________________________________________________________________________________________
//A series of route for a basic testing

//Basic test route to see if the server is on
app.route('/test/running')
    .get((req, res) => {
        res.send("it's working!!!")
    })
    .post(async (req, res) => {
        body = await (req.body);
        res.send(body)
    });

//____________________________________________________________________________________________________________________________
// Defining all the routes for the REST API on the blockchain

//REST APIs to manage the assets directly on the blockchain (demoer access required (to be implemented))
app.use("/rest/Profile/",  require('./routes/Profile'));

var profileController = require('./controller/profile');
console.log(profileController.getAllProfiles());;
console.log(profileController.createProfile('some words'));

//___________________________________________________________________________________________________________________________
//Instanciating a server listening on port 4000 with the socket service 
server = http.createServer(app)
server.listen(port, () => {
    console.log('Backend REST API listening on port 4000!')
});
