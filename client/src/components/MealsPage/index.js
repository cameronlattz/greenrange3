import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../utils/API";

export default function MealsPage() {
    let location = useLocation();
    const [meal, setMeal] = useState({ingredients:[]});
    function getMeal() {
        const id = location.pathname.substring(location.pathname.lastIndexOf("/")+1);
        API.getMeal(id).then((meal) => {
            setMeal(meal.data);
        });
    }
    useEffect(() => getMeal(), []);
    return (
        <article className="h-recipe">
            <h1 className="p-name">{meal.title}</h1>
            <ul>
                {meal.ingredients.map(ingredient => (
                    <li class="p-ingredient">{ingredient}</li>
                ))}
            </ul>
            <div className="e-instructions">
                <ol>
                    <li>{meal.method}</li>
                </ol>
            </div>
        </article>
    );
}