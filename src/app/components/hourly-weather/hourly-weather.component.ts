import { Component, Input, OnInit} from '@angular/core';
import { IHourlyWeather } from 'src/app/shared/model/app-weather.model';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {

  @Input() hourlyWeatherGlobal!: IHourlyWeather[];

  constructor() { }

  ngOnInit(): void {
  }

  getTime(dt: string): string {
    let dtTime: any = dt.split(' ').pop();
    return dtTime.slice(0, 5);;
  }

  getDate(dt: string): string {
    let dtDate: any = dt.split(' ').shift();
    let date = dtDate.split('-').reverse().join('.');
    return date;
  }

  getImg(imgId: string): string {
    return `http://openweathermap.org/img/wn/${imgId}@2x.png`;
  }

  getTemperatyre(temp: number): number {
    return Math.round(temp);
  }

  getWind(wind: number): number {
    return Math.round(wind);
  }

}
