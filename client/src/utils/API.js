import axios from "axios";

export default {
    signIn: function (userData) {
        console.log(userData)
        return axios.post("api/users/signin", userData)
    },
    // Deletes the User with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a User to the database
    saveUser: function (UserData) {
        return axios.post("/api/users", UserData);
    },
    getRecipes: function (startDate, endDate) {
        return axios.post("/api/mealPlans/week", { startDate, endDate })
    },
    getMealPlan: function () {
        return axios.get("/api/mealPlans")
    },
    getMealPlanById: function (id) {
        return axios.get("/api/mealPlans/" + id)
    },
    getMeal: function(id) {
        return axios.get("/api/meal/" + id);
    },
    getMeals: function() {
        return axios.get("/api/meal/");
    },
    postUserSelection: function(mealPlan) {
        return axios.post("/api/userMealPlanHistory", mealPlan);
    },
    getUserSelection: function(userId) {
        return axios.get("/api/userMealPlanHistory/"+ userId);
    }
};
