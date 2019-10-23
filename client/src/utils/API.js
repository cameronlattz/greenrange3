import axios from "axios";

export default {
    signIn: function (userData) {
        return axios.post("api/users/signin", userData)
    },
    // Deletes the User with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a User to the database
    saveUser: function (UserData) {
        console.log("hi test", UserData);
        return axios.post("/api/users", UserData);
    },
    getRecipes: function(startDate, endDate) {
        return axios.post("/api/mealPlans/week", {startDate, endDate})
    }
};
