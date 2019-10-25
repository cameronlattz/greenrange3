import React, { useEffect, useState } from "react";
import MealCard from "./Card";
import { Button, Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        direction: "row",
        justifyContent: "spaceBetween",
        alignItems: "baseline"
    },
    linkContainer: {
        justifyContent: "center"
    },
    header: {
        fontSize: 40,
        color: "rgb(159,65,152)",
        textAlign: "center"
    },
    linkButton: {
        background: "rgb(159,65,152)",
        minWidth: "400px",
        textAlign: "center",
        marginTop: "10px",
        borderRadius: "10px",
        fontSize: "30px",
        padding: "10px"
    }
}));

export default function HomePage(props) {
    const [mealPlans, setMealPlans] = useState([]);
    const [userMealPlanHistory, setUserMealPlanHistory] = useState(null);

    function postUserSelection(mealPlan) {
        const userSelection = { userId: props.userId, planId: mealPlan._id, date: mealPlan.date }
        API.upsertUserMealPlanHistory(userSelection)
            .then(function (res) {
                setUserMealPlanHistory(res.data);
            });
    }

    function getMealPlan() {
        API.getMealPlan({}).then(
            function (res) {
                const mealPlans = res.data;
                API.getMeals().then(
                    function (res) {
                        for (let i = 0; i < mealPlans.length; i++) {
                            const mealPlan = mealPlans[i];
                            mealPlan.mealObj = []
                            for (let g = 0; g < mealPlan.meals.length; g++) {
                                for (let j = 0; j < res.data.length; j++) {
                                    const meal = res.data[j];
                                    if (mealPlan.meals[g] === meal._id) {
                                        mealPlan.mealObj.push(meal);
                                    }
                                }
                            }
                        }
                        setMealPlans(mealPlans);
                    })
            }
        );
    }

    useEffect(() => getMealPlan(), []);

    const classes = useStyles();
    if (userMealPlanHistory) {
        return <Redirect to="/home" />
    }
    return (
        <>
            <Typography className={classes.header}>
                Choose your meals for next week
            </Typography>
            {mealPlans.length === 0 && 
                <Typography className={classes.header}>
                    Loading...
                </Typography>
            }
            {mealPlans.map((mealPlan, index) => {
                return (
                    <div key={index}>
                        <Container className={classes.container}>

                            <div className={classes.container} key={mealPlan._id}>
                                {mealPlan.mealObj.map((meal, index) => {
                                    return <MealCard meal={meal} key={index} />
                                })}
                            </div>
                        </Container>
                        <Container className={classes.linkContainer}>
                            <Button className={classes.linkButton}
                                onClick={() => postUserSelection(mealPlan)}
                            >Meal Plan #{index + 1}
                            </Button>
                        </Container>
                    </div>
                )
            }
            )}
        </>
    );
}
