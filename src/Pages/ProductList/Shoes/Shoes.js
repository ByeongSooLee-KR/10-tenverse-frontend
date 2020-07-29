import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Banner from "../../../Components/Nav/Banner/Banner";
import Header from "../Components/Header/Header";
import TopFilterBar from "../Components/TopfilterBar/TopFilterBar";
import SideFilterBar from "../Components/SideFilterBar/SideFilterBar";
import ItemList from "../Components/ItemList/ItemList";
import Footer from "../../../Components/Footer/Footer";
import { shoesListAPI } from "../../../config";
import { gif } from "../../../config";
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
const limit = 20;
let filterQueryString = [];

class Shoes extends React.Component {
  constructor() {
    super();
    this.state = {
      itemDatas: [],
      filterDatas: [],
      sortedByHighPrice: true,
      offset: 0,
      loading: false,
    };
  }

  handleList = (i) => {
    this.setState({ sortedByHighPrice: !Boolean(i) });
    // i === 0
    //   ? this.setState({ sortedByHighPrice: true })
    //   : this.setState({ sortedByHighPrice: false });
  };

  handleColorNumber = (e) => {
    this.setState({ clickedColorNumber: e });
  };

  onScroll = (e) => {
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
      this.setState({ offset: offset + 1 });
      this.setState({ loading: true });

      fetch(
        `${shoesListAPI}?page=${this.state.offset}&limit=${limit}${
          queryString.length > 0 ? splitString : ""
        })`
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState(
            {
              itemDatas: this.state.itemDatas.concat(json.products),
            },
            () => {
              this.setState({ loading: false });
            }
          );
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  // onScroll = (e, prevProps) => {
  //   this.setState({
  //     scroll: e.srcElement.scrollingElement.scrollTop,
  //   });

  //   const { scroll, offset } = this.state;

  //   let queryString = this.props.location.search;
  //   let splitString = queryString.split("&");
  //   splitString.splice(0, 2);
  //   splitString = splitString.join("&");
  //   splitString = "&".concat(splitString);

  //   if (parseInt(scroll) > 1500 + 2000 * offset) {
  //     this.setState({ offset: offset + 1 });
  //     this.setState({ loading: true });

  //     if (queryString.length > 0) {
  //       // this.setState({ offset: offset + 1 });
  //       // this.setState({ loading: true });

  //       fetch(
  //         `${shoesListAPI}?page=${this.state.offset}&limit=${limit}${splitString}`
  //       )
  //         .then((res) => res.json())
  //         .then((json) => {
  //           this.setState(
  //             {
  //               itemDatas: this.state.itemDatas.concat(json.products),
  //             },
  //             () => {
  //               this.setState({ loading: false });
  //             }
  //           );
  //         })
  //         .catch(
  //           (error) => console.error("Error:", error),
  //           this.setState({ fetchErr: true })
  //         );
  //     } else {
  //       // this.setState({ offset: offset + 1 });
  //       // this.setState({ loading: true });

  //       fetch(`${shoesListAPI}?page=${this.state.offset}&limit=${limit}`)
  //         .then((res) => res.json())
  //         .then((json) => {
  //           this.setState(
  //             {
  //               itemDatas: this.state.itemDatas.concat(json.products),
  //             },
  //             () => {
  //               this.setState({ loading: false });
  //             }
  //           );
  //         })
  //         .catch((error) => console.error("Error:", error));
  //     }
  //   }
  // };

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
    fetch(`${shoesListAPI}?page=${this.state.offset}&limit=${limit}`)
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
    const { itemDatas, loading } = this.state;
    const { sortedByHighPrice, filterDatas } = this.state;

    return (
      <section className="Shoes">
        <div className={`loadingModal ${loading ? "" : "hidden"}`}>
          <img src={gif} alt="preloader gif" />
        </div>
        <Banner />
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
