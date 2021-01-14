import React from "react";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <h1 id="title">Are we becoming wealthier?</h1>
      <Routes />
      <div className="DataRef">
        <b>Data References:</b>
        <p>
          Microdata Series, Current Population Survey: Version 6.0 [dataset].
          Minneapolis, MN: IPUMS, 1968-2020. Retrieved from
          https://doi.org/10.18128/D030.V6.0
        </p>
        <p>
          U.S. Bureau of Labor Statistics, Consumer Price Index for All Urban
          Consumers: New Vehicles in U.S. City Average [CUUR0000SETA01],
          retrieved from FRED, Federal Reserve Bank of St. Louis;
          https://fred.stlouisfed.org/series/CUUR0000SETA01
        </p>
        <p>
          Monthly Median Home Value in US from 1953-2020. Retrieved from
          https://dqydj.com/historical-home-prices/#Historical_Median_Home_Value
        </p>
        <p>
          Average undergraduate tuition and fees and room and board rates
          charged for full-time students in degree-granting institutions, by
          type and control of institution: 1963-64 through 2012-13. Retrieved
          from https://nces.ed.gov/programs/digest/d13/tables/dt13_330.10.asp
        </p>
      </div>
    </div>
  );
};

export default App;
