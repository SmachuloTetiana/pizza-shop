import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "containers/Home";
import List from "containers/List";
import { Header } from "components/Header";
import Cart from "containers/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
