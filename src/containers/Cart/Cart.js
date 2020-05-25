import React from "react";
import { Button } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const Cart = ({ chooseData, incrementQuantity, decrementQuantity }) => {
  if (!chooseData.length) return <p>No data</p>;

  const handleIncrementQuantity = (id) => {
    incrementQuantity(id);
  };

  const handleDecrementQuantity = (id) => {
    decrementQuantity(id);
  };

  return (
    <div>
      {chooseData.map(({ id, title, price, quantity }) => (
        <div key={id}>
          <strong>{title}</strong>
          <span>{price}</span>
          <CaretUpOutlined onClick={() => handleIncrementQuantity(id)} />
          <span>Quantity - {quantity}</span>
          <CaretDownOutlined onClick={() => handleDecrementQuantity(id)} />
          <Button type="primary" danger>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
