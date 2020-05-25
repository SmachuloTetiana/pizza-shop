import { connect } from "react-redux";
import Cart from "./Cart";
import { incrementQuantity, decrementQuantity } from "store/actions/products";

const mapStateToProps = (state) => ({
  chooseData: state.products.chooseData,
});

const actions = { incrementQuantity, decrementQuantity };

export default connect(mapStateToProps, actions)(Cart);
