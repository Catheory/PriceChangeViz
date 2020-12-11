import React from "react";
import { Line } from "react-chartjs-2";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={this.props.chartData}
          options={this.props.chartData.options}
        />
      </div>
    );
  }
}

export default Charts;
