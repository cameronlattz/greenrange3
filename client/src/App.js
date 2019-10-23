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
        render={() => <LoginPage {...[]} updateUserId={updateUserId} />}
      />
      <Route
        exact
        path="/plans"
        render={() => <ChoosePlanPage {...[]} userId={userId} />}
      />
      <Route
        exact
        path="/signup"
        render={() => <SignUpPage {...[]} userId={userId} />}
      />
      <Route
        exact
        path="/home"
        render={() => <HomePage {...[]} userId={userId} />}
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
      <Footer />
    </Router>
  );
}

export default App;
