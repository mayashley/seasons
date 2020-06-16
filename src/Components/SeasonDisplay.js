import React from "react";
import "../SeasonDisplay.css";

// config objects
const seasonConfig = {
  summer: {
    text: "It is Summer",
    iconName: "sun",
  },
  winter: {
    text: "It is Winter",
    iconName: "snowflake",
  },
};
// helper function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // turranary expression opperator
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};
// functional component
const SeasonDisplay = (props) => {
  //  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  // console.log(season);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />

      <h1>{text}</h1>
      <i className={`${iconName} icon huge icon-right`} />
    </div>
  );
};
export default SeasonDisplay;
