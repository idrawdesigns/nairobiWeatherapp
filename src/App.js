import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

//components
import TodaysWeather from './components/todaysWeather';
import WeeklyForecast from './components/weeklyForecast';

class App extends Component {
  state = {
    city: '',
    temperature: '',
    condition: '',
    icon: '',
    weeklydata: []
  };

  componentDidMount() {
    axios
      .get(
        'http://api.wunderground.com/api/f7322e93ae48bd43/conditions/q/KE/Nairobi.json'
      )
      .then(res => {
        const data = res.data;
        // console.log(data);

        this.setState({
          city: data.current_observation.display_location.city,
          temperature: data.current_observation.temp_c,
          condition: data.current_observation.weather,
          icon: data.current_observation.icon_url
        });
      });

    axios
      .get(
        'http://api.wunderground.com/api/f7322e93ae48bd43/forecast10day/q/KE/Nairobi.json'
      )
      .then(res => {
        const weeklydata = res.data;
        console.log(weeklydata);
        this.setState({
          weeklydata: weeklydata.forecast.simpleforecast.forecastday
        });
      });
  }

  render() {
    const weekly = this.state.weeklydata.slice(1, 6, 7, 8, 9, 10);

    return (
      <div className="container">
        <div className="section">
          <div className="top" />
        </div>
        <div className="section">
          <div className="wrapper">
            <div className="left-wrapperContent">
              <TodaysWeather
                city={this.state.city}
                temperature={this.state.temperature}
                condition={this.state.condition}
                icon={this.state.icon}
              />
            </div>
            <div className="right-wrapperContent">
              {weekly.map(day => {
                return <WeeklyForecast key={day.period} day={day} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
