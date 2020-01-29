import React from 'react';
var moment = require('moment');

const DayCard = ({reading}) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  return (
    <div>
      {moment(newDate).format('dddd')}
      {moment(newDate).format('MMM D')}
      {Math.round(reading.main.temp)}&deg;C
      <img src={`http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`} alt={reading.weather[0].icon}/>
      {reading.weather[0].main}
    </div>
  )
}

export default DayCard;