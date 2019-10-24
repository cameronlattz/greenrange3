import React, { useEffect, useState } from "react";
import MealCard from "../MealOptions/Card";
import { Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import "./style.css"

const useStyles = makeStyles(theme => ({
    container: {
        direction: "row",
        justify: "center"
    },
    header: {
        fontSize: 40,
        color: "rgb(159,65,152)",
        textAlign: "center",
        marginTop: "30px",
    }
}));

export default function HomePage(props) {
    const [meals, setMeals] = useState([]);


    function getUserSelection() {
        console.log(props)
        if (props.userId !== "") {
            API.getUserSelection(props.userId).then(
                function (res) {
                    console.log("WTF");
                    console.log("This is the user's selection:", res);

                    if(!res.data){
                        return console.log("oops")
                    }
                    console.log(res.data[0].planId)
                    API.getMealPlanById(res.data[0].planId).then(
                        function (res) {
                            console.log(res);
                            const mealPlan = res.data
                            API.getMeals().then(
                                function (res) {
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
                            // console.log("this is a response", res.data.meals);
                            // const mealIds = res.data.meals;
                            // console.log("this is the meal Ids", mealIds);
                            // let tempMeals = [];
                            // for (let i = 0; i < mealIds.length; i++) {
                            //     API.getMeal(mealIds[i]).then(function (res) {
                            //         tempMeals.push(res.data)
                            //         setMeals(tempMeals)
                            //     })
                            // }
                        }
                    )
                }
            );
        }
    }

    useEffect(() => { getUserSelection() },
        [props.userId]);

    const classes = useStyles();

    return (
        <>
            <Typography className={classes.header}>Your recipes for this weeks dinners!{<br></br>}Click on the arrow below to find easy to follow instructions</Typography>
            <Container className={classes.container}>
                {meals.map(meal => (
                    <MealCard meal={meal} key={meal._id} />
                ))}
            </Container>
        </>
    );
}
