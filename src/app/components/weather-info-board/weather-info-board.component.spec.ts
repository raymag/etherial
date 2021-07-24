import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoBoardComponent } from './weather-info-board.component';

describe('WeatherInfoBoardComponent', () => {
  let component: WeatherInfoBoardComponent;
  let fixture: ComponentFixture<WeatherInfoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInfoBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
