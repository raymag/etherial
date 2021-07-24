import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {
  cityName = 'Janaúba, MG';

  onChange() {
    console.log(this.cityName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
