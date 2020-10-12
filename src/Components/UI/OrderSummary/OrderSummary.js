import React from "react"
import Aux from "../../../hoc/auxiliary"
import Button from "../Button/Button"
const orderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map(igkey => (<li key={igkey}>{igkey}:{props.ingredients[igkey]}</li>));

    return (
        <Aux>
            <p>You have ordered below items:</p>
            <ul>
                {ingredients}
            </ul>
            Continue to checkout?
            <Button type="Success" clicked={props.success}>CONTINUE</Button>
            <Button type="Danger" clicked={props.clicked}>CANCEL</Button>
        </Aux>
    )

}

export default orderSummary;
