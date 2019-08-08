/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package profile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author ryanb
 */
public class Profile {

    private String firstName;
    private String lastName;
    private String location;
    private String jobTitle;
    private int age;
    private List<String> hobbies;
    private List<String> sports;
    private List<String> placesLived;
    private List<String> foods;

    public Profile(String firstName, String lastName, String location, String jobTitle, int age, List<String> hobbies, List<String> sports, List<String> placesLived, List<String> foods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.jobTitle = jobTitle;
        this.age = age;
        this.hobbies = hobbies;
        this.sports = sports;
        this.placesLived = placesLived;
        this.foods = foods;
    }

    public static int score(Profile p1, Profile p2) {
        int score = 0;
        List<String> p1Hobbies = p1.getHobbies();
        for (int i = 0; i < p1Hobbies.size(); i++) {
            if (p2.getHobbies().contains(p1Hobbies.get(i))) {
                score++;
            }
        }

        List<String> p1Sports = p1.getSports();
        for (int i = 0; i < p1Sports.size(); i++) {
            if (p2.getSports().contains(p1Sports.get(i))) {
                score++;
            }
        }

        List<String> p1PlacesLived = p1.getPlacesLived();
        for (int i = 0; i < p1PlacesLived.size(); i++) {
            if (p2.getPlacesLived().contains(p1PlacesLived.get(i))) {
                score++;
            }
        }

        List<String> p1Foods = p1.getFoods();
        for (int i = 0; i < p1PlacesLived.size(); i++) {
            if (p2.getFoods().contains(p1Foods.get(i))) {
                score++;
            }
        }

        return score;
    }
    
    public static int[] getScoreArray(Profile profile, List<Profile> profiles) {
        int[] scoreArray = new int[profiles.size()];
        
        for(int i = 0; i < scoreArray.length; i++) {
            scoreArray[i] = score(profile, profiles.get(i));
        }
        
        return scoreArray;
    }
    
    public static Map<String, Integer> getScoreMap(Profile profile, List<Profile> profiles) {
        Map<String, Integer> scoreMap = new HashMap<>();
        
        for(int i = 0; i < profiles.size(); i++) {
            Profile compareProfile = profiles.get(i);
            scoreMap.put(compareProfile.getFirstName() + " " + compareProfile.getLastName() , score(profile, compareProfile));
        }
        
        return scoreMap;
    }
    
    public static Profile getClosestMatch(Profile profile, List<Profile> profiles) {
        Profile closestMatch = profiles.get(0);
        int closestMatchScore = score(profile, profiles.get(0));
        
        for(int i = 1; i < profiles.size(); i++) {
            Profile currProfile = profiles.get(i);
            int currScore = score(profile, currProfile);
            if(currScore > closestMatchScore) {
                closestMatchScore = currScore;
                closestMatch = currProfile;
            }
        }
        
        return closestMatch;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<String> getHobbies() {
        return hobbies;
    }

    public void setHobbies(List<String> hobbies) {
        this.hobbies = hobbies;
    }

    public List<String> getSports() {
        return sports;
    }

    public void setSports(List<String> sports) {
        this.sports = sports;
    }

    public List<String> getPlacesLived() {
        return placesLived;
    }

    public void setPlacesLived(List<String> placesLived) {
        this.placesLived = placesLived;
    }

    public List<String> getFoods() {
        return foods;
    }

    public void setFoods(List<String> foods) {
        this.foods = foods;
    }

}
