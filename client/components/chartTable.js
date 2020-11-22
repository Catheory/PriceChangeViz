import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {labels, vehiclePrice, vegfruitPrice, medianIncome} from '../data/chartData';
import Charts from "./charts";

class Routes extends React.Component{

    render(){
        return (
            <Charts/>
        )
    }
}

export default Routes;