import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherBoardComponent } from './components/weather-board/weather-board.component';
import { CityNameInputComponent } from './components/city-name-input/city-name-input.component';
import { WeatherInfoBoardComponent } from './components/weather-info-board/weather-info-board.component';
import { FetcherService } from './services/fetcher.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherBoardComponent,
    CityNameInputComponent,
    WeatherInfoBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [FetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
