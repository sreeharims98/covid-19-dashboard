import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import "./Chart.css";

export const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();
      // console.log(initialDailyData);
      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  // console.log(confirmed, recovered, deaths);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: ["blue", "green", "red"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State In ${country}` },
      }}
    />
  ) : null;

  return <div className="chartContainer">{country ? barChart : lineChart}</div>;
};
