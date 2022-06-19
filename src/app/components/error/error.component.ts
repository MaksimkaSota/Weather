import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() errorStatusGlobal!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getError(): string {
    let error = ''
    if (this.errorStatusGlobal == 404) {
      error= `Погода не найдена, некорректное название города или страны`;
    } else if (this.errorStatusGlobal == 400) {
      error = `В поисковой строке нет данных, введите город или страну`;
    } else if (this.errorStatusGlobal != 200) {
      error = `Данные с сервера не получены. На сервере ведуться работы. Попробуйте повторить позже.`;
    }
    return error;
  }
}
