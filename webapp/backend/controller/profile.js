function createProfile(profile) {
    try {

        // do al your logic stuff

        return profile

    } catch (err) {

        errMessage = typeof err == 'string' ? err : err.message;

        console.log("[Controler Bike] Create Bike failed", errMessage);

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