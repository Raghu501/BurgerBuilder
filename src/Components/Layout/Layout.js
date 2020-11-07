import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import classes from "../Layout/Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
class Layout extends Component {

    state = {
        showSideBar: false
    }

    closeSideBarHandler = () => {
        this.setState({ showSideBar: false })
    }

    toggleClickHandler = () => {
        //        alert()
        this.setState((prevState) => {
            return { showSideBar: !prevState.showSideBar }
        })
    }
    componentDidMount() {
        console.log("s", this.state.showSideBar)
    }
    render() {
        return (
            <Aux>
                <Toolbar menuClicked={this.toggleClickHandler}></Toolbar>
                <SideDrawer open={this.state.showSideBar}
                    closed={this.closeSideBarHandler}>
                </SideDrawer>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
//export layout func default
export default Layout;