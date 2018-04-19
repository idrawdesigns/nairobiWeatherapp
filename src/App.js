import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

//components
import TodaysWeather from "./components/todaysWeather";
import WeeklyForecast from './components/weeklyForecast'

class App extends Component {

  state={
   city:'',
   temperature:'',
   condition:'RAINY',
   icon:'http://icons.wxug.com/i/c/k/partlycloudy.gif'
  }

componentDidMount() {
  axios.get('http://api.wunderground.com/api/f7322e93ae48bd43/conditions/q/KE/Nairobi.json')
    .then(res=> {
      const data = res.data
      console.log(data)

      this.setState({
        city:data.current_observation.display_location.city,
        temperature:data.current_observation.temp_c,
        condition:data.current_observation.weather
      })
    })
}

  render() {
    return (
      <div className="App">
        <div className='section'>
        <TodaysWeather 
          city={this.state.city}
          temperature={this.state.temperature}
          condition={this.state.condition}
          icon ={this.state.icon}
         />
        </div>
        <div className='section'>
        <WeeklyForecast/>
        </div>
        
      </div>
    );
  }
}

export default App;
