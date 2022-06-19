import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFiveDayWeather, ITodayWeather } from 'src/app/shared/model/app-weather.model';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onTodayWeather = new EventEmitter<ITodayWeather>(); //Передаем в app.component
  @Output() onFiveDayWeather = new EventEmitter<IFiveDayWeather>(); //Передаем в app.component
  @Output() onError = new EventEmitter<number>(); //Передаем в app.component

  cityName: string = 'Минск';
  cityWeather!: ITodayWeather;
  fiveDayWeather!: IFiveDayWeather;

  errorStatus!: number;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeather();
    this.getFiveDayWeather();
  }

  getWeather(): void {
    this.weatherService.getWeatherByCityName(this.cityName).subscribe((cityWeather: ITodayWeather) => {
      this.cityWeather = cityWeather;
      console.log(this.cityWeather)

      this.onTodayWeather.emit(this.cityWeather); //Передаем в app.component this.cityWeather
    }, (error: any) => {
      this.errorStatus = error.status;
      this.onError.emit(this.errorStatus); //Передаем в app.component this.errorStatus
    })
  }

  getFiveDayWeather(): void {
    this.weatherService.getFiveDayWeatherByCityName(this.cityName).subscribe((fiveDayWeather: IFiveDayWeather) => {
      this.fiveDayWeather = fiveDayWeather;

      this.onFiveDayWeather.emit(this.fiveDayWeather); //Передаем в app.component this.fiveDayWeather
    })
  }

  changeCityName(value: any) {
    this.cityName = value.target.value;
  }

}
