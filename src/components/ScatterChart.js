import React from "react";
import ReactEcharts from "echarts-for-react";
import WineData from '../assets/WineData.json';

const ScatterChart = () =>{


const scatter = {

    xAxis: {
      type: 'category',
      name: 'Color Intensity',
      data: WineData.map(row=>row['Color intensity'])
    },
    yAxis: {
      type: 'value',
      name: 'Hue',
      
    },
    series: [
      {
        data: WineData.map(row=>row['Hue']),
        type: 'scatter'
      }
    ]
  }; 
  return <ReactEcharts option={scatter} />;
}

export default ScatterChart;
