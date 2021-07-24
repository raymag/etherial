import { Component, OnInit } from '@angular/core';
import { FetcherService } from 'src/app/services/fetcher.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {
  weatherData:any = {};
  
  constructor(private fetcherService: FetcherService) { }

  ngOnInit(): void {
  }

  search(cityName: string) {
    this.fetcherService.fetch(cityName).subscribe((res: any) => {
      this.weatherData = res;
    }, (_err:any) => {
      this.weatherData = {};
      alert("City not found");
    });
  }
}
