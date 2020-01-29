import React from 'react';
import './DayCard.css';
var moment = require('moment');

const DayCard = ({reading}) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  return (
    <div className="dayCard">
      <img className="icon" src={`http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`} alt={reading.weather[0].icon}/>
      <p className="dayTemp">{Math.round(reading.main.temp)}&deg;</p>
      <p>{moment(newDate).format('dddd')}</p>
    </div>
  )
}

export default DayCard;