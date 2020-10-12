import React from "react"
import classes from "../Toolbar/Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
const Toolbar = (props) => (

    <header className={classes.Toolbar}>
        menu
        <Logo></Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default Toolbar;