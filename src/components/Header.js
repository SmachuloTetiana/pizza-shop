import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import BasketMenu from "./BasketMenu";

export const Header = () => {
  return (
    <React.Fragment>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="list">
          <Link to="/list">List</Link>
        </Menu.Item>
        <Menu.Item key="basket">
          <Link to="/basket">Basket</Link>
        </Menu.Item>
      </Menu>

      <BasketMenu />
    </React.Fragment>
  );
};
