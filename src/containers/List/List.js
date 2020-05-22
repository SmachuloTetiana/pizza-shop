import React from "react";
import { Row, Col } from "antd";
import { ListCard } from "components/ListCard";

const List = ({ products, addToBasket }) => {
  return (
    <Row justify="space-around">
      {products.map((el) => (
        <Col span={4} key={el.id}>
          <ListCard item={el} addToBasket={addToBasket} />
        </Col>
      ))}
    </Row>
  );
};

export default List;
