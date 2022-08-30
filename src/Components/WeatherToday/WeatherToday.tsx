import React from "react";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import classes from "./WeatherToday.module.scss";

const WeatherToday = () => {
  const { weatherToday } = useTypedSelector((state) => state.weatherToday);

  return (
    <div className={classes.weatherContent}>
      {/*Loader*/}
      <div className={classes.weatherContentHeader}>
        <h3 className={classes.weatherContentHeaderItem}>
          Текущая погода: {weatherToday.name}
        </h3>
        <h3 className={classes.weatherContentHeaderItem}>
          {weatherToday.dtCorrectFormat}
        </h3>
      </div>
      <div className={classes.weatherContentMain}>
        <div className={classes.imageContainer}>
          <div className={classes.currentImage}>
            <img
              src={weatherToday.weather?.[0]?.iconCorrectFormat}
              alt="weather"
            />
          </div>
          <p>{weatherToday.weather?.[0]?.description}</p>
        </div>
        <div className={classes.temperatureContainer}>
          <p className={classes.temperature}>
            <span>{weatherToday.main?.tempCorrectFormat}</span>&#8451;
          </p>
          <p>
            Ощущается как{" "}
            <span>{weatherToday.main?.feels_likeCorrectFormat}</span> &#8451;
          </p>
        </div>
        <div className={classes.windContainer}>
          <div>
            <p>Ветер:</p>
            <p>{weatherToday.wind?.speedCorrectFormat} м/c</p>
          </div>
          <div>
            <p>Порывы:</p>
            <p>{weatherToday.wind?.gustCorrectFormat} м/c</p>
          </div>
          <div>
            <p>Направление:</p>
            <p>{weatherToday.wind?.deg}</p>
          </div>
        </div>
        <div className={classes.sunContainer}>
          <div>
            <p>Восход:</p>
            <p>{weatherToday.sys?.sunriseCorrectFormat}</p>
          </div>
          <div>
            <p>Закат:</p>
            <p>{weatherToday.sys?.sunsetCorrectFormat}</p>
          </div>
          <div>
            <p>Длительность:</p>
            <p>{weatherToday.sys?.durationTimeCorrectFormat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
