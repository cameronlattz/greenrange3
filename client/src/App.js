import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/Form";
import SignUpPage from "./components/SignUpPage/SignUpForm";
import {makeStyles} from "@material-ui/core";
import {ChoosePlanPage, HomePage, IngredientsPage, LandingPage, NavBar, Footer, MealsPage, MealOptions, HowItWorks} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "66vh"
  }
}));

function App() {
  const [userId, setUserId] = useState("");

  const classes = useStyles();
  return (
    <Router>
      <NavBar userId={userId} />
      <div className={classes.root}>
      <Route
        exact
        path="/login"
        render={() => <LoginPage setUserId={setUserId} />}
      />
      <Route
        exact
        path="/plans"
        render={() => <ChoosePlanPage userId={userId} />}
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
        render={() => <LandingPage userId={userId} />}
      />
      <Route
        exact
        path="/ingredients"
        render={() => <IngredientsPage userId={userId} />}
      />
      <Route
        path="/meal"
        render={() => <MealsPage userId={userId} />}
        />
      <Route
        path="/mealOptions"
        render={() => <MealOptions userId={userId} />}
        />
        <Route
        exact
        path="/howitworks"
        render={() => <HowItWorks userId={userId} />}
      />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
