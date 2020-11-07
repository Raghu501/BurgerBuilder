import React from "react"
import classes from "../Toolbar/Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

import DrawerToggle from "../SideDrawer/ToggleDrawer/drawerToggle"
const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/* <div>Logo</div> */}
        <DrawerToggle  clicked={props.menuClicked}></DrawerToggle>
        <Logo></Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default Toolbar;