import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {
  cityName = '';
  weatherData:any = {};
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    this.http.get<any>(`${environment.API_URL}?appid=${environment.API_KEY}&q=${encodeURI(this.cityName)}&units=metric`).subscribe(res => {
      this.weatherData = res;
    }, _err  => {
      this.weatherData = {};
      alert("City not found");
    });
    
  }

  keyDown(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.search();
    }
  }
}
