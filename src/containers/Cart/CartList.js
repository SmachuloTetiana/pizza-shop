import React from "react";
import { Cart } from "components/Cart";

const CartList = ({
  chooseData,
  total,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
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
          onDeleteItem={() => deleteItem(item.id)}
        />
      ))}

      <p>
        <strong>Total: {total}</strong>
      </p>
    </div>
  );
};

export default CartList;
