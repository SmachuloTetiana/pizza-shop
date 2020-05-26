import React from "react";
import { Cart } from "components/Cart";

const CartList = ({
  chooseData,
  total,
  incrementQuantity,
  decrementQuantity,
}) => {
  if (!chooseData.length) return <p>No data</p>;

  return (
    <div>
      {chooseData.map((item) => (
        <Cart
          {...item}
          key={item.id}
          onIncrementQuantity={() => incrementQuantity(item.id)}
          onDecrementQuantity={() => decrementQuantity(item.id)}
        />
      ))}

      <p>{total}</p>
    </div>
  );
};

export default CartList;
