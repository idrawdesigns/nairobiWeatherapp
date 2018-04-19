import React from 'react'
import './todayWeather.css'

const TodaysWeather = (props) => {
  console.log(props)
  return (
      <div className ='wrapper'>
      <div className='wrapperContent'>
      <p>{props.city}</p>
      <h2>{props.temperature}</h2>
      <p>{props.condition}</p>
      </div>
      
    </div>
  )
}

export default TodaysWeather
