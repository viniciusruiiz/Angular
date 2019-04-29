import { Component, OnInit } from '@angular/core';

import { Apis } from '../../mock/api-mock'

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  apis = Apis;

}
