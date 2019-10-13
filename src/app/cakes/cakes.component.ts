import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Cake } from './cake';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss']
})
export class CakesComponent implements OnInit {
  data: Cake[] = [];
  showAll: boolean;
  cakeIndex: number;

  constructor(private api: ApiService) {
    this.showAll = true;
  }

  ngOnInit() {
    this.api.getCakes().subscribe(data => this.data = data);
  }

  deleteCake(id, index) {
    this.api.deleteCake(id)
      .subscribe(res => {
        this.data.splice(index, 1);

        // Reset view
        this.toggleItem(0);
      }, (err) => {
        console.log(err);
      });
  }

  toggleItem(index) {
    this.showAll = !this.showAll;
    this.cakeIndex = index;
  }
}
