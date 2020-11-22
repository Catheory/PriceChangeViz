import React from "react";
import { Line } from "react-chartjs-2";
import {labels, vehiclePrice, vegfruitPrice, medianIncome} from '../data/chartData'

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        type: 'line',
        labels: labels,
        datasets: [
          {
            label: "Vehicle Price",
            backgroundColor: "transparent",
            borderColor: "blue",
            borderWidth: 2,
            data: vehiclePrice,
            yAxisID: 'left-y-axis'
          },
          {
            label: "Median Household Income",
            backgroundColor: "transparent",
            borderColor: "red",
            borderWidth: 2,
            data: medianIncome,
            yAxisID: 'right-y-axis'
          },
        ],
        options: {
          scales: {
              yAxes: [{
                  id: 'left-y-axis',
                  type: 'linear',
                  position: 'left'
              }, {
                  id: 'right-y-axis',
                  type: 'linear',
                  position: 'right'
              }]
          }
        }
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Line data={this.state.chartData} options={this.state.chartData.options} />
      </div>
    );
  }
}

export default Charts;
