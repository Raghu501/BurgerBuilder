
import React from "react"
import class3 from "../BuildControl/BuildControl.css"
const buildControl = (props) => (



    <div className={class3.BuildControl}>
        <label className={class3.Label}>{props.label}</label>
        <button className={class3.More} onClick={() => { props.add() }}>More</button>
        <button className={class3.Less} onClick={() => { props.remove() }}>Less</button>
    </div>

)

export default buildControl;