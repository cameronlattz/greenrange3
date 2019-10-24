import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/Form";
import SignUpPage from "./components/SignUpPage";
import ChoosePlanPage from "./components/ChoosePlanPage";
import HomePage from "./components/HomePage";
import IngredientsPage from "./components/IngredientsListPage";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MealOptions from "./components/MealOptions";

import HowItWorks from "./components/HowItWorks";

function App() {
  const [userId, setUserId] = useState("");


  return (
    <Router>
      <NavBar />
      <Route
        exact
        path="/login"
        render={() => <LoginPage {...[]} setUserId={setUserId} />}
      />
      <Route
        exact
        path="/plans"
        render={() => <ChoosePlanPage {...[]} userId={userId} />}
      />
      <Route
        exact
        path="/signup"
        render={() => <SignUpPage setUserId={setUserId} />}
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
