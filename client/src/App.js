import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/Form";
import {SignUpPage, ChoosePlanPage, HomePage, IngredientsPage, LandingPage, NavBar, Footer, MealsPage, MealOptions, HowItWorks} from "./components";

function App() {
  const [userId, setUserId] = useState("");
  const updateUserId = function(userId) {
    setUserId(userId);
  };

  return (
    <Router>
      <NavBar />
      <Route
        exact
        path="/login"
        render={() => <LoginPage updateUserId={updateUserId} />}
      />
      <Route
        exact
        path="/plans"
        render={() => <ChoosePlanPage {...[]} userId={userId} />}
      />
      <Route
        exact
        path="/signup"
        render={() => <SignUpPage  setUserId={setUserId} />}
      />
      <Route
        exact
        path="/home"
        render={() => <HomePage userId={userId} />}
      />
      <Route
        exact
        path="/"
        render={() => <LandingPage {...[]} userId={userId} />}
      />
      <Route
        exact
        path="/ingredients"
        render={() => <IngredientsPage {...[]} userId={userId} />}
      />
      <Route
        exact
        path="/test"
        render={() => <MealsPage userId={userId} />}
      />
      <Route
        path="/meal"
        render={() => <MealsPage userId={userId} />}
        />
      <Route
        path="/mealOptions"
        render={() => <MealOptions {...[]} userId={userId} />}
        />
        <Route
        exact
        path="/howitworks"
        render={() => <HowItWorks {...[]} userId={userId} />}
      />
      <Footer />
    </Router>
  );
}

export default App;
