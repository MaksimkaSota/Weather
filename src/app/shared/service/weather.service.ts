import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFiveDayWeather, ITodayWeather } from '../model/app-weather.model';

const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_URL_5day = "https://api.openweathermap.org/data/2.5/forecast?"
const API_KEY = 'a1b75f29cf30e2d52888c247e71a0d46';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCityName(cityName: string): Observable<ITodayWeather> {
    return this.http.get<ITodayWeather>(`${API_URL}q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`)
  }

  getFiveDayWeatherByCityName(cityName: string): Observable<IFiveDayWeather> {
    return this.http.get<IFiveDayWeather>(`${API_URL_5day}q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`)
  }
}
