import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductList from "./Pages/ProductList/ProductList";
import SignUp from "./Pages/SignUp/SignUp";
import Cart from "./Pages/Cart/Cart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
