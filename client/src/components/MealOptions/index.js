import React, { useEffect, useState } from "react";
import MealCard from "./Card";
import { Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import Link from "react-router-dom/Link"
import "./style.css";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        direction: "row",
        justifyContent: "spaceBetween",
        alignItems: "center"
    },
    linkContainer: {
        justifyContent: "center"
    },
    header: {
        fontSize: 40,
        color: "rgb(159,65,152)",
        textAlign: "center",
        marginTop: "100px",
        marginBottom: "120px"
    },
    linkButton: {
        background: "rgb(159,65,152)",
        color: "white",
        height: "40px",
        minWidth: "400px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "10px",
        marginTop: "80px",
        marginBottom: "120px",
        fontSize: "30px",
        padding: "10px",
        boxShadow: "1px 2px 2px 1px #ccc"
    }
}));

export default function HomePage(props) {
    const [mealPlans, setMealPlans] = useState([]);
    const [userSelection, setUserSelection] = useState();

    function postUserSelection(mealPlan) {
        console.log("here are the props", props);
        const userSelection = { userId: props.userId, planId: mealPlan._id, date: mealPlan.date }
        API.postUserSelection(userSelection)
            .then(function (res) {
                res.sendStatus(200);
            }).catch(function (err) {
                console.log(err);
            })
    }

    function getUserHistory() {
        console.log("The user Id: ", props.userId)
        API.getUserSelection(props.userId).then(function (res) {
            if (res.data.length === 0) {
                console.log("Boo!!!! Cameron", userSelection)
                return
            } else {
                console.log("a different message for Cameron")
                setUserSelection(res.data);
            }
        })
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

    useEffect(() => { getMealPlan(); getUserHistory() },
        []);

    const classes = useStyles();
    const text = "Time to choose your meals for next week";
    const pickedText = "You have to wait until next week";

    return (
        <>
            <Typography className={classes.header}>{!userSelection ?

                text : pickedText} </Typography>
            {!userSelection && mealPlans.map((mealPlan, index) => {
                return (
                    <>
                        <Container className={classes.container}>

                            <div className={classes.container} key={mealPlan._id}>
                                {mealPlan.mealObj.map((meal, index) => {
                                    return <MealCard meal={meal} key={index} />
                                })}
                            </div>
                        </Container>
                        <Container className={classes.linkContainer}>
                            <Link className={classes.linkButton}
                                onClick={() => postUserSelection(mealPlan)}
                                to="/home"
                            >Meal Plan # {index + 1}
                            </Link>
                        </Container>
                    </>
                )
            }
            )}
        </>
    );
}
