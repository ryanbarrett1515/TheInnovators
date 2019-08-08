class Profile {
    constructor(firstName, lastName, location, jobTitle, age, hobbies, sports, placesLived, foods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hobbies = hobbies;
        this.sports = sports;
        this.placesLived = placesLived;
        this.foods = foods;
    }
}

function score(p1, p2) {
    score = 0;
    for(i = 0; i < p1.hobbies.length; i++) {
        if(p2.hobbies.includes(p1.hobbies[i])) {
            score++;
        }
    }

    for(i = 0; i < p1.sports.length; i++) {
        if(p2.sports.includes(p1.sports[i])) {
            score++;
        }
    }

    for(i = 0; i < p1.placesLived.length; i++) {
        if(p2.placesLived.includes(p1.placesLived[i])) {
            score++;
        }
    }

    for(i = 0; i < p1.foods.length; i++) {
        if(p2.foods.includes(p1.foods[i])) {
            score++;
        }
    }

    return score;
}

function getScoreList(profile, profiles) {
    var scores = [];
    for(i = 0; i < profiles.length; i++) {
        scores.push(score(profile, profiles[i]));
    }
    return scores;
}

function findClosestMatch(profile, profiles) {
    var closestMatch = profiles[0];
    var closestMatchScore = score(profile, profiles[0]);

    for(i = 1; i < profiles.length; i++) {
        var currScore = score(profile, profiles[i]);
        if(currScore > closestMatchScore) {
            closestMatch = profiles(i);
            closestMatchScore = currScore;
        }
    }

    return closestMatch;
}

module.exports = {Profile, score, getScoreList, findClosestMatch};