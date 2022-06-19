import { Component } from '@angular/core';
import { IFiveDayWeather, IHourlyWeather, ITodayWeather } from './shared/model/app-weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app-weather';

  todayWeatherGlobal!: ITodayWeather;
  todayFiveDayWeatherGlobal!: IFiveDayWeather;
  hourlyWeatherGlobal!: IHourlyWeather[];
  errorStatusGlobal!: number;

  ngOnInit() {

  }

  addTodayWeather(todayWeatherGlobal: ITodayWeather) {
    this.todayWeatherGlobal = todayWeatherGlobal;
  }

  addFiveDayWeather(todayFiveDayWeatherGlobal: IFiveDayWeather) {
    this.todayFiveDayWeatherGlobal = todayFiveDayWeatherGlobal;
  }

  addHourlyWeather(hourlyWeatherGlobal: IHourlyWeather[]) {
    this.hourlyWeatherGlobal = hourlyWeatherGlobal;
    console.log(this.hourlyWeatherGlobal);
  }

  closeContainer(ev: any, className: string) {
    if (className === ev.target.className) {
      this.hourlyWeatherGlobal = [];
    }
  }

  addErrorStatus(errorStatus: number) {
    this.errorStatusGlobal = errorStatus;
  }

  closeErrorContainer(ev: any, className: string) {
    if (className === ev.target.className) {
      this.errorStatusGlobal = 0;
    }
  }
}
