import React from "react";
import { useTypedSelector } from "../../Hooks/useTypeSelector";

const WeatherFiveDay = () => {
  const { weatherFiveDay } = useTypedSelector((state) => state.weatherFiveDay);
  console.log(weatherFiveDay);
  return <div></div>;
  //   <div class="whether-content-5day">
  //     <div class="whether-one-day" *ngFor="let day of fiveDayWeather; let i = index"
  //   (click)="getHourlyWeather(day.dt_txt, i)">
  //     <h3 class="day-of-week">{{getDaysOfWeek(day.dt_txt, i)}}</h3>
  //   <p class="date-5day">{{getDates5day(day.dt_txt)}}</p>
  //   <div class="image-conteiner">
  //     <img src={{getImg(day.weather[0].icon)}} alt="weather-image"/>
  //   </div>
  //   <p class="temperature"><span>{{getTemperatyre(day.main.temp)}}</span>&#8451;</p>
  //   <p class="description">{{day.weather[0].description}}</p>
  // </div>
  // </div>;
};

export default WeatherFiveDay;
