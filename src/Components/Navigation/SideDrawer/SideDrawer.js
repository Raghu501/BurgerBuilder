import React from 'react'
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./SideDrawer.css"
import BackDrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/auxiliary"
export default function SideDrawer(props) {
    //on click:close sidedrawer
    let attachedClasses = [classes.SideDrawer, classes.close];


    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.open]
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}></BackDrop>
            <div className={attachedClasses.join(" ")}>
                {/* <Logo></Logo> */}
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    )
}

