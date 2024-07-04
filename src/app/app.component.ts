import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CountryPredictorService } from './country-predictor.service';
import { CountryInterface } from './Country-Predictor-interface';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'promisis';
  public person_Data?: CountryInterface;
  public name?: string = 'Enter Your name';
  constructor(private country_service: CountryPredictorService) {}
  ngOnInit(): void {
    this.country_service.getData(this.name).then((response) => {
      this.person_Data = response;
      console.log(this.person_Data);
    });
  }

  gettingData() {
    this.country_service.getData(this.name).then((response) => {
      this.person_Data = response;
      console.log(this.person_Data);
    });
  }
}
