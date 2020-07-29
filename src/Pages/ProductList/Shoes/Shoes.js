import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Header from "../Components/Header/Header";
import TopFilterBar from "../Components/TopfilterBar/TopFilterBar";
import SideFilterBar from "../Components/SideFilterBar/SideFilterBar";
import ItemList from "../Components/ItemList/ItemList";
import Footer from "../../../Components/Footer/Footer";
import { shoesListAPI } from "../../../config";
import "./Shoes.scss";

const headerData = {
  links: [
    { linkText: "Home", linkTo: "/" },
    { linkText: "신발", linkTo: "/shoes" },
  ],
  title: "SHOES",
  imgUrl:
    "https://image.converse.co.kr/cmsstatic/structured-content/15400/D-Converse-SP20-PWH-Best-Sellers-.jpg",
};
let filterQueryString = [];

class Shoes extends React.Component {
  constructor() {
    super();
    this.state = {
      itemDatas: [
        // {
        //   product_detail: {
        //     id: 1,
        //     shoe__id: 1,
        //     name: "척 70 시그니처",
        //     price: 95000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/167698C_167698C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/167698C_167698C_3.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 1,
        //       color_filter: "black",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/167698C_167698C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/167698C_167698C_3.jpg?browse=",
        //     },
        //     {
        //       shoe_id: 219,
        //       color_filter: "green",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/167699C_167699C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/167699C_167699C_3.jpg?browse=",
        //     },
        //   ],
        // },
        // {
        //   product_detail: {
        //     id: 2,
        //     shoe__id: 2,
        //     name: "원스타 프로 피그 스킨",
        //     price: 99000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168654C_168654C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168654C_168654C_03.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 2,
        //       color_filter: "green",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168654C_168654C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168654C_168654C_03.jpg?browse=",
        //     },
        //     {
        //       shoe_id: 71,
        //       color_filter: "indigo",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168655C_168655C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168655C_168655C_03.jpg?browse=",
        //     },
        //   ],
        // },
        // {
        //   product_detail: {
        //     id: 3,
        //     shoe__id: 3,
        //     name: "척테일러 올스타 핵트 패션",
        //     price: 79000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168745C_168745C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168745C_168745C_03.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 3,
        //       color_filter: "black",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168745C_168745C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168745C_168745C_03.jpg?browse=",
        //     },
        //     {
        //       shoe_id: 153,
        //       color_filter: "white",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168746C_168746C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168746C_168746C_03.jpg?browse=",
        //     },
        //   ],
        // },
        // {
        //   product_detail: {
        //     id: 4,
        //     shoe__id: 4,
        //     name: "프로레더 블리딩 컬러",
        //     price: 89000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168787C_168787C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168787C_168787C_03.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 4,
        //       color_filter: "white",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168787C_168787C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168787C_168787C_03.jpg?browse=",
        //     },
        //     {
        //       shoe_id: 186,
        //       color_filter: "black",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168871C_168871C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168871C_168871C_03.jpg?browse=",
        //     },
        //   ],
        // },
        // {
        //   product_detail: {
        //     id: 5,
        //     shoe__id: 5,
        //     name: "척테일러 올스타 프로 스웨이드",
        //     price: 85000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/27161/168640C_168640C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/27161/168640C_168640C_03.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 5,
        //       color_filter: "beige",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/27161/168640C_168640C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/27161/168640C_168640C_03.jpg?browse=",
        //     },
        //     {
        //       shoe_id: 220,
        //       color_filter: "black",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/159573C_159573C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/159573C_159573C_03.jpg?browse=",
        //     },
        //   ],
        // },
        // {
        //   product_detail: {
        //     id: 6,
        //     shoe__id: 6,
        //     name: "척테일러 올스타 리프트 캠프 데이지",
        //     price: 99000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/568930C_568930C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/568930C_568930C_02.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 6,
        //       color_filter: "red",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/568930C_568930C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/568930C_568930C_02.jpg?browse=",
        //     },
        //   ],
        // },
        // {
        //   product_detail: {
        //     id: 7,
        //     shoe__id: 7,
        //     name: "척 70 인더스트리얼 글램",
        //     price: 99000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/568797C_568797C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/568797C_568797C_03.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 7,
        //       color_filter: "yellow",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/568797C_568797C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/568797C_568797C_03.jpg?browse=",
        //     },
        //     {
        //       shoe_id: 181,
        //       color_filter: "gray",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/568796C_568796C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/568796C_568796C_03.jpg?browse=",
        //     },
        //   ],
        // },
        // {
        //   product_detail: {
        //     id: 8,
        //     shoe__id: 8,
        //     name: "잭퍼셀 샤이니 레더",
        //     price: 95000,
        //     main_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168134C_168134C_pdp-primary.jpg?gallery=",
        //     sub_image:
        //       "https://image.converse.co.kr/cmsstatic/product/168134C_168134C_03.jpg?browse=",
        //   },
        //   color_list: [
        //     {
        //       shoe_id: 8,
        //       color_filter: "black",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168134C_168134C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168134C_168134C_03.jpg?browse=",
        //     },
        //     {
        //       shoe_id: 187,
        //       color_filter: "white",
        //       main_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168135C_168135C_pdp-primary.jpg?gallery=",
        //       sub_image:
        //         "https://image.converse.co.kr/cmsstatic/product/168135C_168135C_03.jpg?browse=",
        //     },
        //   ],
        // },
      ],

      filterDatas: [],
      sortedByHighPrice: true,
      offset: 0,
      loading: false,
    };
  }

  handleList = (i) => {
    i === 0
      ? this.setState({ sortedByHighPrice: true })
      : this.setState({ sortedByHighPrice: false });
  };

  handleColorNumber = (e) => {
    this.setState({ clickedColorNumber: e });
  };

  onScroll = (e, prevProps) => {
    this.setState({
      scroll: e.srcElement.scrollingElement.scrollTop,
    });

    const { scroll, offset } = this.state;

    let queryString = this.props.location.search;
    let splitString = queryString.split("&");
    splitString.splice(0, 2);
    splitString = splitString.join("&");
    splitString = "&".concat(splitString);

    if (parseInt(scroll) > 1500 + 2000 * offset) {
      if (queryString.length > 0) {
        this.setState({ offset: offset + 1 });

        fetch(
          `${shoesListAPI}?page=${this.state.offset}&limit=20${splitString}`
        )
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              itemDatas: this.state.itemDatas.concat(json.products),
            });
          });
      } else {
        this.setState({ offset: offset + 1 });

        fetch(`${shoesListAPI}?page=${this.state.offset}&limit=20`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              itemDatas: this.state.itemDatas.concat(json.products),
            });
          });
      }
    }
  };

  handleFilterUrl = (name, value) => {
    const newString = `&${name}=${value}`;

    filterQueryString.includes(newString)
      ? filterQueryString.splice(filterQueryString.indexOf(newString), 1)
      : filterQueryString.push(`${newString}`);

    const joinString = filterQueryString.join("");
    const newUrl = `?page=0&limit=20${joinString}`;
    this.props.history.push(`/category/shoes${newUrl}`);
  };

  componentDidMount() {
    fetch(`${shoesListAPI}?page=${this.state.offset}&limit=20`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ itemDatas: json.products, filterDatas: json.filters });
      });
    window.addEventListener("scroll", this.onScroll);
  }

  componentDidUpdate(prevProps) {
    const queryString = this.props.location.search;

    if (prevProps.location.search !== queryString) {
      fetch(`${shoesListAPI}/filter${queryString}`)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            itemDatas: json.products,
            filterDatas: json.filters,
          });
        });
      window.addEventListener("scroll", this.onScroll);
    }
  }

  render() {
    const { itemDatas } = this.state;
    const { sortedByHighPrice, filterDatas } = this.state;

    return (
      <section className="Shoes">
        <Nav />
        <Header
          links={headerData.links}
          title={headerData.title}
          imgUrl={headerData.imgUrl}
        />
        {itemDatas && (
          <TopFilterBar
            dataNumber={itemDatas.length}
            sortedByPrice={this.handleList}
          />
        )}
        <main>
          <div className="mainBox">
            <SideFilterBar
              filterDatas={filterDatas}
              handleFilterChange={this.handleFilterUrl}
            />
            {itemDatas && (
              <ItemList datas={itemDatas} handleSort={sortedByHighPrice} />
            )}
          </div>
        </main>
        <Footer />
      </section>
    );
  }
}

export default Shoes;