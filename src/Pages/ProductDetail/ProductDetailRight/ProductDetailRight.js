import React, { Component } from "react";
import ShoeInfo from "./ShoeInfo/ShoeInfo";
import ShoeColor from "./ShoeColor/ShoeColor";
import ShoeSize from "./ShoeSize/ShoeSize";
import "./ProductDetailRight.scss";

class ProductDetailRight extends Component {
  render() {
    return (
      <div className="ProductDetailRight">
        <ShoeInfo scrollTo={this.props.scrollTo} refArr={this.props.refArr} />
        <ShoeColor />
        <ShoeSize />
      </div>
    );
  }
}

export default ProductDetailRight;
