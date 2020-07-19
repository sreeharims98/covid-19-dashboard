import React from "react";
import "./Cards.css";
import { Card, Spin } from "antd";
import Countup from "react-countup";
export const Cards = ({ data }) => {
  if (!data.confirmed) {
    return <Spin />;
  }
  return (
    <div className="all-cards">
      <Card
        className="card"
        title="CONFIRMED"
        hoverable
        headStyle={{
          color: "blue",
          height: "50px",
        }}
        bodyStyle={{
          fontWeight: "bold",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        <Countup
          start={0}
          end={data.confirmed.value}
          duration={1.0}
          separator=","
        />
      </Card>
      <Card
        className="card"
        title="RECOVERED"
        hoverable
        headStyle={{
          color: "green",
          height: "50px",
        }}
        bodyStyle={{
          fontWeight: "bold",
          backgroundColor: "green",
          color: "white",
        }}
      >
        <Countup
          start={0}
          end={data.recovered.value}
          duration={1.0}
          separator=","
        />
      </Card>
      <Card
        className="card"
        title="DEATHS"
        hoverable
        headStyle={{
          color: "red",
          height: "50px",
        }}
        bodyStyle={{
          fontWeight: "bold",
          backgroundColor: "red",
          color: "white",
        }}
      >
        <Countup
          start={0}
          end={data.deaths.value}
          duration={1.0}
          separator=","
        />
      </Card>
    </div>
  );
};
