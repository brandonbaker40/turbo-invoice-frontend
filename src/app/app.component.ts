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

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/disciplines.json')
    .subscribe((res : Discipline[]) => this.disciplines = res);
  }
}
