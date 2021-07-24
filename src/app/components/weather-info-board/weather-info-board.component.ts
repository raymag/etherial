import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info-board',
  templateUrl: './weather-info-board.component.html',
  styleUrls: ['./weather-info-board.component.css']
})
export class WeatherInfoBoardComponent implements OnInit {
  @Input() info:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
