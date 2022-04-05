import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flight } from './flight';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private url = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getFlights() {
    return this.http.get(this.url);
  }
}
