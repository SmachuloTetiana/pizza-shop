import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { ShoppingCartOutlined } from "@ant-design/icons";

const BasketMenu = ({ chooseData }) => {
  const handleClick = () => {};

  return (
    <div className="CartProductsCount" onClick={handleClick}>
      <ShoppingCartOutlined
        style={{ color: "#FFF", fontSize: "16px", marginRight: "10px" }}
      />
      Item
      {/* Item - {chooseData.length} */}
    </div>
  );
};

export default BasketMenu;

// const mapStateToProps = (state) => ({
//   chooseData: state.products.chooseData,
// });

// export default connect(mapStateToProps)(BasketMenu);
