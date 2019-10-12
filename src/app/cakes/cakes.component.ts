import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
import { Cake } from './cake';
import { ApiService } from './api.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss']
})
export class CakesComponent implements OnInit {
  data: Cake[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getCakes().subscribe(data => this.data = data);
  }

  deleteCake(id, index) {}

}
