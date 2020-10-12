import React from "react"
import Aux from "../../hoc/auxiliary"
import { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/UI/OrderSummary/OrderSummary"
//manage state
//class based component
class BurgerBuilder extends Component {

    // constructor(this.props.) {
    //     super(this.props.);
    // }

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        purchasable: false,
        purchasing: false
    }

    updatePurchase = (ingredients) => {

        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];
        }).reduce((sum, ele) => {
            return sum += ele;
        }, 0);

        this.setState({ purchasable: sum > 0 });
        if (sum <= 0) {

            //if (newcount == 0) {
            this.setState({ purchasing: false });
            //}
        }

    };
    addIngredientHandler = (type) => {

        let oldcount = this.state.ingredients[type];
        let newcount = oldcount + 1;
        //update state
        //state should be updated in immutable way
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newcount;

        this.setState({ ingredients: updatedIngredients });
        this.updatePurchase(updatedIngredients);
    }

    removeIngredientHandler = (type) => {

        let oldcount = this.state.ingredients[type];
        let newcount = oldcount - 1;
        if (newcount >= 0) {
            //update state
            //state should be updated in immutable way
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = newcount;

            this.setState({ ingredients: updatedIngredients });

            this.updatePurchase(updatedIngredients);
        }

    }
    updatePurchasing = () => {
        this.setState({ purchasing: true });
    }
    cancelHandler = () => {
        this.setState({ purchasing: false });
    }

    orderContinueHandler = () => {
        alert('continue')
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.cancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        clicked={this.cancelHandler}
                        success={this.orderContinueHandler}>
                    </OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addHandler={this.addIngredientHandler}
                    removeHandler={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    purchasing={this.updatePurchasing}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder;