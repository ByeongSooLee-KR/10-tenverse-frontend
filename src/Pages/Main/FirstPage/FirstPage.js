import React from "react";
import MainItemList from "../Components/Item/MainItemList";
import "./FirstPage.scss";

const firstImg = {
  backgroundImage: `url(${"https://image.converse.co.kr/cmsstatic/structured-content/17636/KakaoTalk_20200721_172805223.jpg?gallery"})`,
};

class FirstPage extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div className="FirstPage">
        <div className="smallBox">
          <MainItemList product={product} />
        </div>
        <div className="largeBox" style={firstImg}>
          <div className="textContainer">
            <p className="title">WOMEN'S COLLECTION</p>
            <p className="sub">유니크한 연출이 가능한 스타일링의 완성</p>
            <button className="btn">더 알아보기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
