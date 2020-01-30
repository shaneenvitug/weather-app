import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DayCard from './DayCard';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function App() {
  const [city, setCity] = useState();
  const [weatherInfo, setWeatherInfo] = useState();
  const [dailyInfo, setDailyInfo] = useState([]);

  const classes = useStyles();

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=dc0ba9ecf138c1e8167017659deef39b`)
      .then(res => {
        console.log(res.data);
        setWeatherInfo({
          city: res.data.city.name,
          temperature: res.data.list[0].main.temp,
          description: res.data.list[0].weather[0].main,
          icon: res.data.list[0].weather[0].icon
        });
        setDailyInfo(res.data.list.filter(reading => reading.dt_txt.includes("00:00:00")))
    })
    .catch(error => {
      if (error.response) {
        alert("Please Type A Valid City.")
      };
    }) 
  }

  const handleChange = e => {
    setCity(e.target.value);
  }

  const dayCards = () => {
    return dailyInfo.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  return (
    <div className="App">
       <div className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="City" value={city} onChange={handleChange}/>
        {/* button material ui */}
        <Fab variant="extended" onClick={() => getWeather()} >
          Search
        </Fab>
        {weatherInfo && <CurrentWeather 
          city={weatherInfo.city} 
          temperature={weatherInfo.temperature} 
          description={weatherInfo.description} 
          icon={weatherInfo.icon}
        />}
      </div>
      <div className="container">
        {dayCards()}
      </div>
    </div>
  );
}

const CurrentWeather = ({city, temperature, icon, description}) => {
  return(
    <div className="weather">
      {city && <p className="city">{city}</p>}
      {temperature && <p className="temp">{Math.round(temperature)}&deg;</p>}
      {description && <p>{description}</p>}
      {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} />}
    </div>
  )
}

export default App;
