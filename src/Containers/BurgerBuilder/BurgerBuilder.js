import React from "react"
import Aux from "../../hoc/auxiliary"
import { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BurgerControls from "../../Components/Burger/BuildControls/BuildControls";
//manage state
//class based component
class BurgerBuilder extends Component {

    // constructor(this.props.) {
    //     super(this.props.);
    // }

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 0,
            bacon: 1
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls />
            </Aux>
        )
    }
}
export default BurgerBuilder;