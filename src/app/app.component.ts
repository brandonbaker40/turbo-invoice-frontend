import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discipline } from './models/discipline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turbo-invoice-frontend';
  disciplines: Discipline[];
  apiURL = 'http://turbo-invoice-backend.herokuapp.com/api/v1/'

  constructor(private http: HttpClient) {
    http.get(this.apiURL + 'disciplines.json')
    .subscribe((res : Discipline[]) => this.disciplines = res);
  }
}
