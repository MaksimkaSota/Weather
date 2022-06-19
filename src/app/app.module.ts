import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiveDayWeatherComponent } from './components/five-day-weather/five-day-weather.component';
import { TodayWeatherComponent } from './components/today-weather/today-weather.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';

import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component'; //API

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiveDayWeatherComponent,
    TodayWeatherComponent,
    HourlyWeatherComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
