import React, { useEffect, useState } from "react";
import MealCard from "../MealOptions/Card";
import { Button, Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import ButtonSignUp from "../ButtonSignUp";
import "./style.css"

const useStyles = makeStyles(theme => ({
    container: {
        alignItems: "baseline",
        justifyContent: "center"
    },
    header: {
        fontSize: 40,
        color: "rgb(159,65,152)",
        textAlign: "center",
        marginTop: "30px",
    },
    centered: {
        textAlign: "center"
    },
    button: {
        marginTop: 5,
        marginBottom: 20
    }
}));

export default function HomePage(props) {
    const [meals, setMeals] = useState(null);

    function addRecipes() {
        const baseUrl = window.location.protocol + "//" + window.location.host;
        const recipes = meals.map(meal => baseUrl + "/" + meal._id);
        window.whisk.queue.push(function() {
            window.whisk.listeners.addClickListener('whisk-single-recipe', 'shoppingList.addRecipesToList', {
                recipes: recipes
            });
        });
    }

    function getUserSelection() {
        console.log(props.userId);
        if (props.userId !== "") {
            API.getUserSelection(props.userId).then(
                function (res) {
                    if (res.data.length > 0) {
                        API.getMealPlanById(res.data[0].planId).then(function (res) {
                            const mealPlan = res.data
                            API.getMeals().then(function (res) {
                                mealPlan.mealObj = []
                                for (let g = 0; g < mealPlan.meals.length; g++) {
                                    for (let j = 0; j < res.data.length; j++) {
                                        const meal = res.data[j];
                                        if (mealPlan.meals[g] === meal._id) {
                                            mealPlan.mealObj.push(meal);
                                        }
                                    }
                                }
                                setMeals(mealPlan.mealObj);
                            })
                        })
                    } else {
                        setMeals([]);
                    }
                }

            );
        }
    }

    useEffect(() => getUserSelection(), [props.userId]);

    const classes = useStyles();
    if (props.userId === "") {
        return (
            <div className={classes.centered}>
                <Typography className={classes.header}>
                    Please sign in or register.
                </Typography>
                <ButtonSignUp href="/login"></ButtonSignUp>
                <Button
                variant="contained"
                size="medium"
                color="secondary"
                style={{textShadow: "none"}}
                href="/signup">
                    Register
                </Button>
            </div>
        )
    }
    else if (meals === null) {
        return (
            <Typography className={classes.header}>
                Loading...
            </Typography>
        )
    }
    else if (meals.length === 0) {
        return (
            <Redirect to="/mealOptions" />
        )
    }
    else {
        return (
            <div className={classes.centered}>
                <Typography className={classes.header}>
                    Your recipes for this weeks dinners!
                </Typography>
                <Button
                    className={classes.button}
                    variant="contained"
                    size="medium"
                    color="secondary"
                    id="whisk-single-recipe"
                    onClick={addRecipes}>
                    Add recipes to shopping list
                </Button>
                <Typography>
                    Click on an arrow below to find easy to follow instructions
                </Typography>
                <Container className={classes.container}>
                    {meals && meals.map(meal => (
                        <MealCard meal={meal} key={meal._id} />
                    ))}
                </Container>
            </div>
        );
    }
}
