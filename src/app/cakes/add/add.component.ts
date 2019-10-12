import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  cakeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.cakeForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      comment: ['', Validators.compose([Validators.required])],
      imageUrl: ['', Validators.compose([Validators.required])],
      yumFactor: ['', Validators.compose([Validators.required])]
    });
  }

  addCake(payload) {

    this.api.addCakes(payload.value)
      .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

}
