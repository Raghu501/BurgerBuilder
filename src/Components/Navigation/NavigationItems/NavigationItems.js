import React from "react"
import classes from "../NavigationItems/NavigationItems.css"
import NavigationItem from "./NavigationItem"
const NavigationItems = () => (


    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem>Checkout</NavigationItem>
    </ul>


)
export default NavigationItems;