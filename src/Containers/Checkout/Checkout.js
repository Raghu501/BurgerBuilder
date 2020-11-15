import React, { Component } from 'react'
import CheckoutSummary from "../../Components/CheckoutSummary/CheckoutSummary"

export default class Checkout extends Component {

    state = {
        ingredients: {
            meat: 1,
            bacon: 1
        }
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        )
    }
}
