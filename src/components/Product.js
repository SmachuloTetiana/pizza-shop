import React from "react";
import { Card, Button, Row } from "antd";

const { Meta } = Card;

export const Product = ({ item, onaddToBasket }) => {
  return (
    <Card className="Cart" hoverable cover={<img alt="example" src="" />}>
      <Meta title={item.title} description={item.description} />

      <Row justify="space-between" className="Cart__PriceBlock">
        <strong>{item.price}</strong>
        <Button type="primary" onClick={onaddToBasket}>
          Add
        </Button>
      </Row>
    </Card>
  );
};
