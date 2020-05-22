import React from "react";
import { Card, Button, Row } from "antd";

const { Meta } = Card;

export const ListCard = ({ item, addToBasket }) => {
  const handlClick = () => {
    addToBasket(item);
  };
  return (
    <Card
      className="Cart"
      hoverable
      cover={<img alt="example" src={item.image} />}
    >
      <Meta title={item.title} description={item.description} />

      <Row justify="space-between" className="Cart__PriceBlock">
        <strong>{item.price}</strong>
        <Button type="primary" onClick={handlClick}>
          Add
        </Button>
      </Row>
    </Card>
  );
};
