const profileJson = require('../json/profile');

function createProfile(profile) {
    try {

        // do al your logic stuff
        const Profile = require('../classes/Profile');
        const fs = require('fs');  
        console.log('hello',profileJson)
        console.log('FirstName: ' + profileJson.Profile.firstName);

        return profile;

    } catch (err) {

        errMessage = typeof err == 'string' ? err : err.message;

        console.log("[Controller Profile] Create Bike failed", errMessage);

        return errMessage
    }
}

function getAllProfiles() {
    try {

        // do your stuff
        const fs = require('fs');  
        var profiles = fs.readFileSync('./json/profiles.json', 'utf8');
        return profiles;
    } catch (err) {

        errMessage = typeof err == 'string' ? err : err.message;

        console.log("[Controller Profiles] Get All Profiles failed", errMessage);

        return errMessage
    }
}

module.exports = { createProfile, getAllProfiles }