import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discipline } from '../../../models/discipline';

@Component({
  selector: 'app-discipline-list',
  templateUrl: './discipline-list.component.html',
  styleUrls: ['./discipline-list.component.scss']
})
export class DisciplineListComponent implements OnInit {
  disciplines: Discipline[];
  apiURL = 'http://turbo-invoice-backend.herokuapp.com/api/v1/'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.apiURL + 'disciplines.json')
      .subscribe((res : Discipline[]) => this.disciplines = res);
  }
}
