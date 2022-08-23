import React, { ChangeEvent, useEffect, useState } from "react";
import { useActions } from "../../Hooks/useActions";
import search from "../../images/search.svg";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import classes from "./Header.module.scss";

const Header = () => {
  const [cityName, setCityName] = useState<string>("Минск");
  const getCityName = function (value: ChangeEvent<HTMLInputElement>) {
    setCityName(value.target.value);
  };

  useEffect(() => {
    getWeatherToday(cityName);
  }, []);

  const { weatherToday } = useTypedSelector((state) => state.weatherToday);

  console.log(weatherToday);

  const { getWeatherToday } = useActions();
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Моя погода</h1>
      <div className={classes.searchContainer}>
        <input
          className={classes.inputSearch}
          type="search"
          value="Минск"
          onChange={(event) => getCityName(event)}
        />
        <button
          className={classes.buttonSearch}
          onClick={() => getWeatherToday(cityName)}
        >
          <img src={search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Header;
