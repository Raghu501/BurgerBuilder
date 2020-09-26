import React from "react";
import Aux from "../../hoc/auxiliary";
import classes from "../Layout/Layout.css"
const Layout = (props) => {
    return (
        <Aux>
            <div >
                Toolbar, Sidedrawer
            </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}
//export layout func default
export default Layout;