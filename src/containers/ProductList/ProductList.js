import React from "react";
import { Row, Col } from "antd";
import { Product } from "components/Product";

const ProductList = ({ products, addToBasket }) => {
  return (
    <Row justify="space-around">
      {products.map((el) => (
        <Col span={4} key={el.id}>
          <Product item={el} onaddToBasket={() => addToBasket(el)} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
