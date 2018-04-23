import React, { Component } from 'react'

import './weeklyForecast.css'

const WeeklyForecast =(props)=> {
    console.log(props.day)
    return (
      <div>
     <p>{props.day.date.weekday_short}</p> 
     <span>
        <img src={props.day.icon_url} />
      </span>
      <p>{props.day.high.celsius}-{props.day.low.celsius}&deg;</p>
      
      
      </div>
    )
}

export default WeeklyForecast
