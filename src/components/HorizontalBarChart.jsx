import React from "react";
import { Bar } from "react-chartjs-2";

export default function HorizontalBarChart({labels=[],data=[],height=300}){
  return <div style={{height}}>
    <Bar data={{labels,datasets:[{data,backgroundColor:'#3B82F6',borderRadius:8,barThickness:22}]}}
      options={{indexAxis:'y',maintainAspectRatio:false,
      plugins:{legend:{display:false},datalabels:{color:'white',anchor:'center',align:'center'}},
      scales:{x:{grid:{display:false},ticks:{display:false}},y:{grid:{display:false}}}}}/>
  </div>;
}
