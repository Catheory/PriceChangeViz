import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Charts from "./charts";

const Routes = () => {
  return (
    <Router>
        <main>
            <Route exact path="/" component={Charts} />
        </main>
    </Router>
  )
}

export default Routes;