import React, { Component } from "react";

export default class Test2 extends Component {
    shouldComponentUpdate() {
        return false;
    }
    test = () => {
        window.whisk.queue.push(function() {
            window.whisk.listeners.addClickListener('whisk-single-recipe', 'shoppingList.addRecipesToList', {
              recipes: [
                  'https://whisk.com/demo/calzone-roasted-peppers'
                ]
            });
          });
          const ingredients = ["shrimp",
          "rice",
          "shrimp stock",
          "parsley",
          "tomatoes",
          "onion",
          "garlic",
          "olive oil",
          "red chilis"];
    }
    componentDidMount() {
        this.test();
    }
    render() {
        return (
            <button id="whisk-single-recipe">Add recipe to shopping list</button>
        );
    }
}