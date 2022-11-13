import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../assets/WineData.json";

const BarChart = () =>{
  const [data, setData] = useState({});
  useEffect(() => {
    let xAxis = [];
    let yAxis = [];
    let newData = {}

    WineData.forEach(data => {
      let alcoholType = data["Alcohol"]
      let malicAcid = data["Malic Acid"];
      if(newData[alcoholType]) {
        newData[alcoholType]["Malic Acid"] += malicAcid;
        newData[alcoholType]["count"] += 1;
      }else{
        newData[alcoholType] = {
          "Malic Acid" : 0,
          "count" : 0
        }
      }
    });
    
    for(var data in newData) {
      let totalMalicAcid = newData[data]["Malic Acid"];
      let count = newData[data]["count"]
      console.log(totalMalicAcid, count);
      xAxis.push(data);
      yAxis.push(totalMalicAcid / count);
    }
    setData({
      xAxis: xAxis,
      yAxis: yAxis
    })
    console.log(newData);
  }, [])

const bar = {
    xAxis: {
      type: 'category',
      data: data.xAxis,
      name: 'Alcohol Type',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.yAxis,
        type: 'bar'
      }
    ]
  }; 
  return <ReactEcharts option={bar} />;
}


export default BarChart;
