import React, { Component } from 'react'
import Burger from "../Burger/Burger"
import Button from "../UI/Button/Button"
import classes from "../../Components/CheckoutSummary/CheckoutSummary.css";
class CheckoutSummary extends Component {

    render() {
        return (
            <div className={classes.CheckoutSummary}>
                <div style={{ width: '100%' }}>
                    <Burger ingredients={this.props.ingredients}></Burger>
                </div >

                <Button type={"Success"}>Continue</Button>
                <Button type={"Danger"}>Back</Button>

            </div>
        )
    }
}

export default CheckoutSummary

