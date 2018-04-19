import React, { Component } from 'react'

import DailyForecast from './dailyForecastItem'

export default class WeeklyForecast extends Component {
  render() {
    return (
      <div>
        <DailyForecast/>
      </div>
    )
  }
}
