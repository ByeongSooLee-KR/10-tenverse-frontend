import React, { Component } from "react";
import "./ShoeColor.scss";

class ShoeColor extends Component {
  shoeColorArr = [
    "https://image.converse.co.kr/cmsstatic/product/560250C_560250C_pdp-option.jpg?browse=",
    "https://image.converse.co.kr/cmsstatic/product/560251C_560251C_pdp-option.jpg?browse=",
  ];

  listShoeColor = this.shoeColorArr.map((shoe, i) => {
    if (i === 0) {
      return (
        <div className="shoeColorImageEach">
          <img alt="신발 이미지 색상" src={shoe} />
          <div className="underShoeColorImage first"></div>
        </div>
      );
    } else {
      return (
        <div className="shoeColorImageEach">
          <img alt="신발 이미지 색상" src={shoe} />
          <div className="underShoeColorImage"></div>
        </div>
      );
    }
  });

  render() {
    return (
      <div className="ShoeColor">
        <div className="shoeColorText">
          <span className="grey">컬러</span>
          <span className="shoeColor">블랙</span>
        </div>
        <div className="shoeColorImage">{this.listShoeColor}</div>
      </div>
    );
  }
}

export default ShoeColor;
