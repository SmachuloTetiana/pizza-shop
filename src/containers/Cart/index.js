import { connect } from "react-redux";
import CartList from "./CartList";
import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
} from "store/actions/products";

const mapStateToProps = (state) => ({
  chooseData: state.products.chooseData,
  total: state.products.total,
});

const actions = { incrementQuantity, decrementQuantity, deleteItem };

export default connect(mapStateToProps, actions)(CartList);
