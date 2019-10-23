import React, { useEffect, useState } from "react";

import RecipeCard from "./Card";
import { Container, makeStyles } from "@material-ui/core";
import API from "../../utils/API";

const useStyles = makeStyles(theme => ({
  container: {
    direction: "row",
    justify: "center"
  }
}));

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  function getRecipes() {
    API.getRecipes(new Date("10/21/2019"), new Date("10/25/2019")).then(
      function(res) {
        setRecipes(res.data);
      }
    );
  }

  useEffect(() => getRecipes());

  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </Container>
    </>
  );
}
