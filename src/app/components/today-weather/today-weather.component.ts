import { Component, Input, OnInit } from '@angular/core';
import { ITodayWeather } from 'src/app/shared/model/app-weather.model';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent implements OnInit {

  @Input() todayWeatherGlobal!: ITodayWeather;

  constructor() { }

  ngOnInit(): void {
  }

  getDate(date: number): string {
    let currentDate = new Date(date * 1000);

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let number = currentDate.getDate();

    if (month < 10) {
      if (number < 10) {
        return `0${number}.0${month}.${year}`;
      }
      return `${number}.0${month}.${year}`;
    }
    if (number < 10) {
      return `0${number}.0${month}.${year}`;
    }
    return `${number}.${month}.${year}`;
  }

  getTime(time: number): string {
    let currentTime = new Date(time * 1000);

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    if (hours < 10) {
      if (minutes < 10) {
        return `0${hours}:0${minutes}`;
      }
      return `0${hours}:${minutes}`;
    }
    if (minutes < 10) {
      return `${hours}:0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  getDurationTime(time: number): string {
    let hours = Math.floor(time / 3600);
    let ost = time - hours * 3600;
    let minutes = Math.floor(ost / 60);

    if (hours < 10) {
      if (minutes < 10) {
        return `0${hours}:0${minutes}`;
      }
      return `0${hours}:${minutes}`;
    }
    if (minutes < 10) {
      return `${hours}:0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  getImg(imgId: string): string {
    return `http://openweathermap.org/img/wn/${imgId}@2x.png`;
  }

  getTemperatyre(temp: number): number {
    return Math.round(temp);
  }

  getWindDestination(deg: number): string {
    let destination = ''
    if ((0 <= deg && deg <= 15) || (345 <= deg && deg <= 360)) {
      destination = 'север';
    }
    if (75 <= deg && deg <= 105) {
      return 'восток';
    }
    if (165 <= deg && deg <= 195) {
      destination = 'юг';
    }
    if (255 <= deg && deg <= 285) {
      destination = 'запад';
    }
    if (15 < deg && deg < 75) {
      destination = 'северо-восток';
    }
    if (105 < deg && deg < 165) {
      destination = 'юго-восток';
    }
    if (195 < deg && deg < 255) {
      destination = 'юго-запад';
    }
    if (285 < deg && deg < 345) {
      destination = 'северо-запад';
    }
    return destination;
  }

  getWind(wind: number): number {
    return Math.round(wind);
  }
}
