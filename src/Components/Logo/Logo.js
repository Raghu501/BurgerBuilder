import React from "react"
import classes from "../Logo/Logo.css"
import logo from "../../../src/Assets/Images/burger-logo.png"
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={logo} alt="burgerlogo"></img>
    </div>
)

export default Logo