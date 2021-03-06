import React, { Component } from "react";
import Render from "./Render";
import Axios from "axios";

export default class FetchData extends Component {
  state = {
    data: [],
    Sell: [],
    Buy: [],
  };
  componentDidMount() {
    const fetch = [];
    Axios.get(
      "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
    ).then((res) => {
      console.log(res);
      for (let key in res.data.sana.data) {
        fetch.push({
          ...res.data.sana.data[key],
          id: key,
        });
      }
      this.setState({ data: fetch });
    });
  }
  render() {
    return <Render data={this.state.data} />;
  }
}
