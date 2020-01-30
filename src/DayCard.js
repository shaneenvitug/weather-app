import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './DayCard.css';
var moment = require('moment');

const useStyles = makeStyles({
  card: {
    minWidth: 50,
    margin: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

const DayCard = ({reading}) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <img className="icon" src={`http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`} alt={reading.weather[0].icon}/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <p className="dayTemp">{Math.round(reading.main.temp)}&deg;</p>
        </Typography>
        <Typography variant="body2" component="p">
          <p>{moment(newDate).format('ddd')}</p>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DayCard;