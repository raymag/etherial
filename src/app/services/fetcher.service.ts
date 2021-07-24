import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetcherService { 
  constructor (private http: HttpClient) {}

  fetch(cityName: string): any {
    return this.http.get<any>(`${environment.API_URL}?appid=${environment.API_KEY}&q=${encodeURI(cityName)}&units=metric`);
  }
}
