import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFiveDayWeather, IHourlyWeather } from 'src/app/shared/model/app-weather.model';

@Component({
  selector: 'app-five-day-weather',
  templateUrl: './five-day-weather.component.html',
  styleUrls: ['./five-day-weather.component.scss']
})
export class FiveDayWeatherComponent implements OnInit {
  @Output() onHourlyWeather = new EventEmitter<IHourlyWeather[]>(); //Передаем в app.component

  @Input() todayFiveDayWeatherGlobal!: IFiveDayWeather;

  fiveDayWeather: any[] = [];
  hourlyWeather!: IHourlyWeather[];

  constructor() {
  }

  ngOnInit(): void {
    this.getlistOf5days(this.todayFiveDayWeatherGlobal.list);
  }

  getlistOf5days(list: any): void {
    let listOfTonight = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].dt_txt.includes('00:00:00')) {
          listOfTonight.push(list[i]);
          break;
        }
      }
    let listOfNextDays = [];
      for (let j = 0; j < list.length; j++) {
        if (list[j].dt_txt.includes('15:00:00')) {
          listOfNextDays.push(list[j]);
        }
      }
    let currentDate = new Date();
    if (currentDate.getHours() < 18) {
      listOfNextDays.shift();
    } else {
      listOfNextDays.pop();
    }
    this.fiveDayWeather = listOfTonight.concat(listOfNextDays);
  }

  getDaysOfWeek(date: number, i: number): string {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    if (i === 0) {
      return 'Сегодня ночью';
    }

    let elementDate = new Date(date);
    let day = days[elementDate.getDay()];

    return day;
  }

  getDates5day(date: number): string {
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

      let elementDate = new Date(date);
      let month = months[elementDate.getMonth()];
      let num = elementDate.getDate();
      let number = `${num} ${month}`;

      return number;
  }

  getImg(imgId: string): string {
    return `http://openweathermap.org/img/wn/${imgId}@2x.png`;
  }

  getTemperatyre(temp: number): number {
    return Math.round(temp);
  }

  getHourlyWeather(dt: string, i: number): void {

    if (i === 0) {
      return;
    }

    let timeList = [];
    let dtDate: any = dt.split(' ').shift();

    for (let list of this.todayFiveDayWeatherGlobal.list) {
      if (list.dt_txt.includes(dtDate)) {
        timeList.push(list);
      }
    }

    this.hourlyWeather = timeList;

    this.onHourlyWeather.emit(this.hourlyWeather); //Передаем в app.component this.hourlyWeather
  }

}
