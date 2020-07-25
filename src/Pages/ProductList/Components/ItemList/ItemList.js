import React from "react";
import ItemBox from "../ItemBox/ItemBox";
import "./ItemList.scss";

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedColorId: "",
    };
  }
  handleColorNumber = (e) => {
    this.setState({ clickedColorId: e });
  };

  handleOptionImgs = () => {
    const { datas } = this.props;
    const optionImgs = datas.find((data) =>
      data.includes({ id: [data.options.shoecolor__id] })
    );
    console.log(optionImgs);
    return optionImgs;
  };

  render() {
    const { datas, handleSort } = this.props;

    return (
      <div className="ItemList">
        <div className="box">
          {handleSort
            ? datas
                .sort(function (a, b) {
                  return (
                    b.productDetail.shoe__price - a.productDetail.shoe__price
                  );
                })
                .map((data) => {
                  return (
                    <ItemBox
                      data={data}
                      handleColorNumber={this.handleColorNumber}
                      optionImgs={this.handleOptionImgs}
                    />
                  );
                })
            : datas
                .sort(function (a, b) {
                  return (
                    a.productDetail.shoe__price - b.productDetail.shoe__price
                  );
                })
                .map((data) => {
                  return (
                    <ItemBox
                      data={data}
                      handleColorNumber={this.handleColorNumber}
                      optionImgs={this.handleOptionImgs}
                    />
                  );
                })}
        </div>
      </div>
    );
  }
}

export default ItemList;
