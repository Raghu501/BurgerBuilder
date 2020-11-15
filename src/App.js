import React, { Component } from "react";
import Layout from './Components/Layout/Layout';
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout"
import { Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder}></Route>
            <Route path="/Checkout" component={Checkout}></Route>
          </Switch>
          {/* <BurgerBuilder></BurgerBuilder> */}
          {/* <Checkout></Checkout> */}
        </Layout>
      </div>
    );
  }
}
export default App;
