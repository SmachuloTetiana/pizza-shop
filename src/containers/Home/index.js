import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProducts } from "store/actions/products";

const Home = ({ data, setProducts }) => {
  useEffect(() => {
    !data.length && setProducts();
  }, []);

  console.log(data);

  return <p>Home Page</p>;
};

const mapStateToProps = (state) => ({
  data: state.products.forcelateData,
});

const action = {
  setProducts,
};

export default connect(mapStateToProps, action)(Home);
