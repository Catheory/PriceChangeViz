import { black } from "chalk";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  labels,
  vehiclePrice,
  medianHousePrice,
  tuition,
  medianIncome,
} from "../data/chartData";
import Charts from "./charts";

const checkboxToData = {
    vehiclePrice: {
        label: "Average Price for a New Vehicle",
        backgroundColor: "transparent",
        borderColor: "orange",
        borderWidth: 2,
        data: vehiclePrice,
        yAxisID: "left-y-axis",
    },
    medianHousePrice: {
        label: "Median House Price",
        backgroundColor: "transparent",
        borderColor: "green",
        borderWidth: 2,
        data: medianHousePrice,
        yAxisID: "left-y-axis",
    },
    tuition: {
        label: "Average Tuition & Fee - Four Year",
        backgroundColor: "transparent",
        borderColor: "blue",
        borderWidth: 2,
        data: tuition,
        yAxisID: "left-y-axis",
    },
    medianIncome: {
        label: "Median Household Income",
        backgroundColor: "transparent",
        borderColor: "red",
        borderWidth: 2,
        data: medianIncome,
        yAxisID: "left-y-axis",
    },
};

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
    clickedSubjects: {},
      chartData: {
        type: "line",
        labels: labels,
        datasets: [checkboxToData.medianIncome],
        options: {
          title: {
            display: true,
            text: "Price vs Income 1950 - 2020",
            fontSize:30,
            fontColor: "#000000",
          },
          legend: {
            position: "right",
            labels: {
              padding: 20,
              usePointStyle: false,
              fontSize: 15,
            },
          },
          scales: {
            yAxes: [
              {
                id: "left-y-axis",
                type: "linear",
                position: "left",
                scaleLabel: {
                  display: true,
                  labelString: "Median Household Income",
                  fontColor: "#000000",
                  fontSize: 20,
                  padding:10,
                },
                ticks: {
                  callback: function (value, index, values) {
                    if (parseInt(value) >= 1000) {
                      return (
                        "$" +
                        value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      );
                    } 
                  },
                },
              },
            ],
          },
        },
      },
    };
  }

  handleClick(e) {

    this.state.clickedSubjects[e.target.value] = e.target.checked;

    this.setState({
        clickedSubjects: this.state.clickedSubjects
    });

    let newDS = [checkboxToData['medianIncome']];

    for (let [key, value] of Object.entries(this.state.clickedSubjects)) {
        if (value) {
            newDS.push(checkboxToData[key]);
        } 
    } 
    
    console.log('newDs', newDS)
      
    this.setState({
        chartData: {
            ...this.state.chartData,
            datasets: newDS
        }
    })
  }


  render() {
    
    return (
      <div className="chartTable">
        <div className="checkbox">
          <div>
            <input
              id="vehicleCheckbox"
              type="checkbox"
              name="vehicle"
              value="vehiclePrice"
              onClick={this.handleClick}
            />
            <label htmlFor="vehicleCheckbox">Vehicle</label>
          </div>
          <div>
            <input
              id="houseCheckbox"
              type="checkbox"
              name="house"
              value="medianHousePrice"
              onClick={this.handleClick}
            />
            <label htmlFor="houseCheckbox">House</label>
          </div>
          <div>
            <input
              id="tuitionCheckbox"
              type="checkbox"
              name="tuition"
              value="tuition"
              onClick={this.handleClick}
            />
            <label htmlFor="tuitionCheckbox">Tuition</label>
          </div>
        </div>
        <Charts chartData={this.state.chartData} />
      </div>
    );
  }
}

export default Routes;
