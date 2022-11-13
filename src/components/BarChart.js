import React from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../assets/WineData.json";

const BarChart = () =>{

const bar = {
    xAxis: {
      type: 'category',
      data: WineData.map(row=>row['Alcohol']),
      name: 'Alcohol Type',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }; 
  return <ReactEcharts option={bar} />;
}


export default BarChart;
