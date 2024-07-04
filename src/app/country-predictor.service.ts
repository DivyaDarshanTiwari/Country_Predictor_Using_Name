import { Injectable } from '@angular/core';
import { CountryInterface } from './Country-Predictor-interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryPredictorService {
  private url: string = 'https://api.nationalize.io';

  constructor() {}

  public async getData(name?: string): Promise<CountryInterface| undefined> {
    if (name) {
      const params = new HttpParams().set('name', name);
      const new_url = `${this.url}?${params.toString()}`;
      try {
        let response = await fetch(new_url);
        if (!response.ok) {
          throw new Error('The response was not ok');
        }
        let data: CountryInterface = await response.json();
        return data;
      } catch (error) {
        console.log('An Error Occurred', error);
        return undefined;
      }
    } else {
      throw new Error('Name parameter is required');
    }
  }
}
