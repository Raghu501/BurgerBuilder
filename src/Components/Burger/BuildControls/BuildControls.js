
import React from "react"
import class2 from "../BuildControls/BuildControls.css"
import BuildControl from "../BuildControl/BuildControl"
const controls = [

    { "label": "Salad", type: "salad" },
    { "label": "Cheese", type: "cheese" },
    { "label": "Bacon", type: "bacon" },
    { "label": "Meat", type: "meat" }

];

const buildControls = (props) => (

    <div className={class2.BuildControls}>
        {
            controls.map(ctrl =>
                (<BuildControl label={ctrl.label} key={ctrl.label} />)
            )
        }
    </div>


)

export default buildControls;