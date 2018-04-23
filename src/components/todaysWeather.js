import React from 'react';
import './todayWeather.css';

const TodaysWeather = props => {
  console.log(props);
  return (
    <div className="today">
      <div>
        <p>{props.city}</p>
        <h2>{props.temperature}&deg;</h2>
        <p>{props.condition}</p>
      </div>
    </div>
  );
};

export default TodaysWeather;
