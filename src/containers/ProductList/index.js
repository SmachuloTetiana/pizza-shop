import { connect } from "react-redux";
import ProductList from "./ProductList";
import { addToBasket } from "store/actions/products";

const mapStateToProps = (state) => ({
  products: state.products.data,
});

const actions = {
  addToBasket,
};

export default connect(mapStateToProps, actions)(ProductList);
