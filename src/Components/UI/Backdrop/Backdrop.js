import React from "react"
import classes from "../Backdrop/Backdrop.css"
const backdrop = (props) => (
    props.show ?
        <div className={classes.Backdrop} onClick={props.clicked}>
        </div> : <div></div>
)
export default backdrop;