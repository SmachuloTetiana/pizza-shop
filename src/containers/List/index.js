import { connect } from "react-redux";
import List from "./List";
import { addToBasket } from "store/actions/products";

const mapStateToProps = (state) => ({
  products: state.products.data,
});

const actions = {
  addToBasket,
};

export default connect(mapStateToProps, actions)(List);
