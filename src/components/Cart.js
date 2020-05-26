import React from "react";
import { Button } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

export const Cart = ({ onIncrementQuantity, onDecrementQuantity, ...item }) => {
  const { title, price, quantity } = item;

  return (
    <div className="Cart">
      <strong>{title}</strong>
      <span>{price * quantity}</span>
      <CaretUpOutlined onClick={onIncrementQuantity} />
      <span>Quantity - {quantity}</span>
      <CaretDownOutlined onClick={onDecrementQuantity} />
      <Button type="primary" danger>
        Delete
      </Button>
    </div>
  );
};
