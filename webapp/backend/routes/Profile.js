/**
 * All the routes to interact with the Bike assets of the blockchain (create, update, delete, get)
 */

// Import of the modules 
var express = require('express');
var router = express.Router();

// Import of the controllers
var profileController = require('../controller/profile');

// A basic test route
router.get('/test', (req, res) => {
    res.send('bike test is working');
})

// A GET route to get all the bikes
router.get('/getall',  (req, res) => {
    try {

        let result = profileController.getAllProfiles();

        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
})

// A POST route to create a profile
router.post('/create',  function (req, res, next) {
    try {
        let result =  profileController.createProfile(req.body);

        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
})

// Exporting the routes
module.exports = router;