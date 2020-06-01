import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "containers/Home";
import ProductList from "containers/ProductList";
import { Header } from "components/Header";
import Cart from "containers/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/list" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
