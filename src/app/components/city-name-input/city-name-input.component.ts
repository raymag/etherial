import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-name-input',
  templateUrl: './city-name-input.component.html',
  styleUrls: ['./city-name-input.component.css']
})
export class CityNameInputComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  cityName = '';

  keyDown(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.searchEvent.emit(this.cityName);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
