import React, { Component } from "react";
import { Cards } from "./components/cards/Cards";
import { CountryPicker } from "./components/countryPicker/CountryPicker";
import { Chart } from "./components/chart/Chart";
import "./App.css";
import { fetchData } from "./api";
import covid19 from "./assets/COVID19.png";
import { Layout } from "antd";

const { Content, Footer } = Layout;
export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    // console.log(fetchedData);
  };

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="logo">
            <img src={covid19} alt="COVID 19" />
          </div>
          <div className="picker">
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </div>
        </div>

        <Layout>
          <Content className="site-layout" style={{ marginTop: 34 }}>
            <div
              className="site-layout-background"
              style={{ padding: 0, minHeight: 380 }}
            >
              <Cards data={this.state.data} />
              <Chart data={this.state.data} country={this.state.country} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Corona Virus (COVID-19) Live Dashboard
          </Footer>
        </Layout>
      </div>
    );
  }
}
