import React from "react";
import classes from "../Burger/Burger.css";
//Burger
//we need ingridients
//functional form receive props
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
const burger = (props) => {

    var arrProperties = Object.keys(props.ingredients);
    let transformedIngredients = arrProperties.map(igKey => {
        //[2]
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        });
    }).reduce((arr, ele) => {
        return arr.concat(ele);
    }, []);
    console.log(transformedIngredients);
    //transform array into something
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding
        ingredients!</p>
    }
    return (
        //wrapper over all ingredients
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );

}

export default burger;