import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.final';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {
  cityName = 'Janaúba, MG';

  onChange() {
    console.log(this.cityName);
    console.log(environment)
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
